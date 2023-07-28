import { useEffect, useRef, useState } from "react";
import MenuItem from "./MenuItem.js";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";

const RestaurantItemCategory = ({ itemCategory, setRefs, index }) => {
  const [isVisible, setIsVisible] = useState(true);
  const headingRef = useRef(null);

  useEffect(() => {
    if (setRefs) {
      setRefs((prev) => {
        return { ...prev, [index]: headingRef };
      });
    }
  }, []);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className='p-5' ref={headingRef}>
      <div className='flex items-center justify-between'>
        <h3 className='font-bold text-xl cursor-pointer' onClick={toggleView}>
          {itemCategory.title} ({itemCategory.itemCards.length})
        </h3>
        {isVisible ? (
          <SlArrowUp onClick={toggleView} className='cursor-pointer' />
        ) : (
          <SlArrowDown onClick={toggleView} className='cursor-pointer' />
        )}
      </div>
      {isVisible && (
        <div className='flex flex-col justify-evenly'>
          {itemCategory.itemCards.map((item, index) => (
            <MenuItem key={index} item={item.card.info} />
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantItemCategory;
