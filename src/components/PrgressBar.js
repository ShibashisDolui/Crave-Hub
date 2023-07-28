import React, { useEffect, useState } from "react";

const ProgressBar = () => {
  console.log("hello from PB");
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress(progress + 0.1);
      }
    }, 1);

    return () => {
      clearTimeout(timer);
    };
  }, [progress]);

  const translate = `translateX(${progress}%)`;
  return (
    <div className='w-full absolute top-0 h-[2px] overflow-hidden z-50'>
      <div
        className='w-full h-full bg-red'
        style={{ transform: translate }}></div>
    </div>
  );
};

export default ProgressBar;
