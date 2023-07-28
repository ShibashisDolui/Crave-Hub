import { UserAuth } from "../utils/context/AuthContext";

export const Footer = () => {
  const { user } = UserAuth();
  let name;
  if (user) {
    if (user.displayName != null) {
      name = user.displayName;
    } else {
      name = user.email;
    }
  }

  return (
    <div className='flex mob:flex-col items-center justify-around w-full shadow max-h-[6%] bg-yellow text-blue-dark text-center leading-[3.5rem] bottom-0 fixed z-40'>
      <span className='text-left mob:text-xs mob:text-center italic font-bold text-white'>
        Hey {user && name}.... Thanks for using Crave Hub
      </span>
    </div>
  );
};
