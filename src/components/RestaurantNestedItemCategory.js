import { useEffect, useRef, useState } from "react";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import RestaurantItemCategory from "./RestaurantItemCategory";

const RestaurantNestedItemCategory = ({ nestedCategory, setRefs, index }) => {
  const [isVisible, setIsVisible] = useState(true);
  const headingRef = useRef(null);

  const toggleView = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (setRefs)
      setRefs((prev) => {
        return { ...prev, [index]: headingRef };
      });
  }, []);

  return (
    <div className='p-5'>
      <div className='flex items-center justify-between'>
        <h3
          className='font-bold text-lg cursor-pointer'
          onClick={toggleView}
          ref={headingRef}>
          {nestedCategory.title}
        </h3>
        {isVisible ? (
          <SlArrowUp onClick={toggleView} className='cursor-pointer' />
        ) : (
          <SlArrowDown onClick={toggleView} className='cursor-pointer' />
        )}
      </div>
      {isVisible && (
        <div>
          {nestedCategory.categories.map((category, index) => (
            <div key={index}>
              <RestaurantItemCategory itemCategory={category} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default RestaurantNestedItemCategory;
