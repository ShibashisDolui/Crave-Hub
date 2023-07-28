import { RestaurantCard } from "./RestaurantCard"; /* Import using Named Import */
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer"; /* Shimmer component to display before page load */
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import useLocalStorage from "../utils/useLocalStorage";
import { ImLocation2 } from "react-icons/im";
import { BiArrowBack } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { setShowProgressBar } from "../utils/showProgressBarSlice";

const Body = () => {
  const [searchText, setSearchText] = useState();
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");
  const isOnline = useOnline(); /* Custom Hook */
  const [showFavourites, setShowFavourites] = useState(false);
  const [restaurantsFound, setrestaurantFound] = useState([]);
  const [favRestaurants, setFavRestaurants] =
    useLocalStorage("favs"); /* Custom Hook */
  const [latitude, setLatitude] = useState(
    sessionStorage.getItem("lat") !== null
      ? sessionStorage.getItem("lat")
      : "12.9351929"
  );
  const [longitude, setLongitude] = useState(
    sessionStorage.getItem("lng") !== null
      ? sessionStorage.getItem("lng")
      : "77.62448069999999"
  );
  const [isHovered, setIsHovered] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setShowProgressBar(false));
    getRestaurants();
  }, [latitude, longitude]);

  // function to fetch the longitude and latitude of the user using browser's geolocation API
  const fetchCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lng = sessionStorage.getItem("lng");
          const lat = sessionStorage.getItem("lat");
          // console.log(lng, lat, "inside fn");
          if (lng === null || lat === null) {
            sessionStorage.setItem("lng", position.coords.longitude);
            sessionStorage.setItem("lat", position.coords.latitude);
            setLatitude(position.coords.latitude);
            setLongitude(position.coords.longitude);
          } else {
            setLongitude(lng);
            setLatitude(lat);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  };

  // function fetch all restaurants from the API
  const getRestaurants = async () => {
    try {
      /* Live Data */
      const response = await fetch(
        `https://crave-hub-proxy-server.onrender.com/api/restaurants?lat=${latitude}&lng=${longitude}`
      );
      const res_data = await response.json();

      /* Mock Data */
      //const res_data = restaurantList;

      setAllRestaurants(
        res_data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      setFilteredRestaurants(
        res_data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
      // console.log(res_data.data.cards[2].data.data.cards, "hi");
      const restaurantCount =
        res_data?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants.length;
      setrestaurantFound(Array.from({ length: restaurantCount }).fill(true));
    } catch (error) {
      console.log(error);
    }
  };

  // function to search restaurant for a given keyword
  const searchData = (event) => {
    event.preventDefault();
    // console.log(searchText);
    const data = filterData(searchText, allRestaurants);
    setrestaurantFound(data);
    // setFilteredRestaurants(data);
    setErrorMsg("");
    let checkIfNotFound = true;
    data.forEach((found) => {
      if (found) {
        checkIfNotFound = false;
      }
    });
    if (checkIfNotFound) {
      setErrorMsg("No matches found ");
    }
  };

  // checking if the user is connected to the internet
  // if not the user will be shown a prompt
  if (!isOnline) {
    return (
      <div className='container'>
        <h1 className='font-bold text-red text-3xl text-center'>
          Offline, please check your internet connection{" "}
        </h1>
      </div>
    );
  }

  // function to add a restaurant in the favourite list
  const addFavourite = (props) => {
    // If restaurant is not marked fav, then add to local storage
    if (
      !favRestaurants.find(
        (restaurant) => restaurant?.info?.id === props?.info?.id
      )
    ) {
      setFavRestaurants([...favRestaurants, props]);
    } else {
      //If restaurant is already in local storage, then remove from it.
      const modifiedFavRestaurants = favRestaurants.filter(
        (restaurant) => restaurant?.info?.id !== props?.info?.id
      );
      setFavRestaurants(modifiedFavRestaurants);
    }
  };

  const showFavouriteRestaurants = () => {
    // if (isFavourite) {
    //   if (errorMsg) setErrorMsg("");
    //   setFilteredRestaurants(allRestaurants);
    // } else {
    if (favRestaurants.length === 0) {
      setErrorMsg("No favourites");
      setFilteredRestaurants([]);
    } else {
      setFilteredRestaurants(favRestaurants);
    }
    // }
    setShowFavourites(true);
  };

  console.log(favRestaurants);

  // Don't render component (Early return)
  if (!allRestaurants) {
    return null;
  }
  return (
    <div className='container pb-10'>
      <div className='flex justify-start mob:flex-col'>
        <div className='flex justify-center min-w-[500px] mob:min-w-[375px] h-[100px] mob:h-[50px] items-center m-auto'>
          <button
            className='relative rounded-full bg-slate-300 p-2 hover:bg-slate-600 transition duration-300 hover:text-white'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              fetchCoordinates();
            }}>
            <ImLocation2 />
            {isHovered && (
              <div className='flex items-center justify-center absolute top-[-150%] right-[-300%] rounded-lg z-10 w-[700%] h-[40px] bg-amber-300 font-bold'>
                Show Nearby Restaurants
              </div>
            )}
          </button>

          <form className='w-[85%] flex px-4' onSubmit={searchData}>
            <input
              type='text'
              placeholder=' Search for restaurant'
              value={searchText}
              className='outline-none text-base mob:text-xs p-[5px] basis-[350px] mob:basis-[270px] h-[30px] rounded-md ring-1 ring-gray bg-gray'
              key='input-text'
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button className='btn btn--primary basis-[60px] mob:basis-[50px] mob:text-xs ml-2'>
              Search
            </button>
          </form>
        </div>
        <div className='flex justify-end h-[100px] items-center m-auto mob:h-[50px]'>
          {!showFavourites ? (
            <button
              className={
                "btn btn--primary px-[5px] mob:basis-[50px] mob:text-xs"
              }
              onClick={() => {
                showFavouriteRestaurants();
              }}>
              Favourites{" "}
            </button>
          ) : (
            <button
              className='bg-green text-white p-1 rounded-lg flex items-center'
              onClick={() => {
                setErrorMsg("");
                setShowFavourites(false);
              }}>
              <BiArrowBack />
              Go Back
            </button>
          )}
        </div>
      </div>
      {errorMsg && (
        <div className='h-14 m-auto text-center' id='error'>
          <span className='error-text w-14 h-8 ' id='error-msg'>
            {errorMsg}
          </span>
        </div>
      )}

      {allRestaurants?.length === 0 ? (
        <Shimmer />
      ) : (
        <div className='flex flex-wrap gap-5 justify-center'>
          {!showFavourites
            ? allRestaurants.map((restaurant, index) => {
                return (
                  restaurantsFound[index] && (
                    <Link
                      className='basis-[250px] mob:basis-[150px]'
                      to={"/restaurant/" + restaurant?.info?.id}
                      state={{ lng: longitude, lat: latitude }}
                      key={restaurant?.info.id}>
                      <RestaurantCard
                        props={restaurant}
                        key={restaurant?.info?.id}
                        setRestaurants={addFavourite}
                        favRestaurants={favRestaurants}
                      />
                    </Link>
                  )
                );
              })
            : filteredRestaurants.map((restaurant, index) => {
                return (
                  restaurantsFound[index] && (
                    <Link
                      className='basis-[250px] mob:basis-[150px]'
                      to={"/restaurant/" + restaurant?.info?.id}
                      state={{ lng: longitude, lat: latitude }}
                      key={restaurant?.info?.id}>
                      <RestaurantCard
                        props={restaurant}
                        key={restaurant?.info?.id}
                        setRestaurants={addFavourite}
                        favRestaurants={favRestaurants}
                      />
                    </Link>
                  )
                );
              })}
        </div>
      )}
    </div>
  );
};

export default Body;
