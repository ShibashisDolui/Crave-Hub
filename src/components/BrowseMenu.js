import { useState } from "react";
import { GiForkKnifeSpoon } from "react-icons/gi";

const BrowseMenu = ({ refs, menu }) => {
  const [isMenuBarVisible, setIsMenuBarVisible] = useState(false);

  const scrollToHeading = (ref) => {
    if (ref.current)
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: "smooth",
      }); // Scroll to the nearest edge of the element });
    console.log(refs);
  };
  return (
    <div className='flex p-2 items-center rounded-2xl bg-sky-300 fixed bottom-[9%] left-[30%] z-40 cursor-pointer hover:shadow-lg'>
      <GiForkKnifeSpoon className='mr-1' />
      <span className='text-white' onClick={() => setIsMenuBarVisible(true)}>
        Browse Menu
      </span>
      {isMenuBarVisible && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'
          onClick={() => setIsMenuBarVisible(false)}>
          <div className='w-[220px] mx-auto h-[55%] bg-white rounded-lg shadow-lg overflow-y-scroll'>
            {menu.map((item, index) => (
              <div
                key={item.title}
                className='font-bold shadow-md px-4 py-1'
                onClick={(event) => {
                  event.stopPropagation();
                  scrollToHeading(refs[index]);
                }}>
                {item.title}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BrowseMenu;
