import { useLocation, useParams } from "react-router-dom";
import { MenuShimmer } from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantInfo from "../components/RestaurantInfo";
import RestaurantMenuList from "../components/RestaurantMenuList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setShowProgressBar } from "../utils/showProgressBarSlice";

const RestaurantDetails = () => {
  const { resId } = useParams(); /* Read dynamic URL params */
  const state = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(setShowProgressBar(true));
  }, []);

  console.log(state, "state");

  const restaurant = useRestaurant(
    resId,
    state.state.lng,
    state.state.lat
  ); /* Passing resId to Custom Hooks to fetch restaurant details and returns it */
  console.log(state, "details");

  return !restaurant ? (
    <MenuShimmer />
  ) : (
    <div className='container relative'>
      <RestaurantInfo {...restaurant.info} />
      <RestaurantMenuList menu={restaurant.menu} />
    </div>
  );
};

export default RestaurantDetails;
