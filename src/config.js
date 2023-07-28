//Config Driven UI - Mock Data from API

/* CDN for Restaurant, Menu items and Fallback Images  */
export const RES_IMG_CDN =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";
export const ITEM_IMG_CDN =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/";

export const CART_FALLBACK_IMG =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0";

/* PONDY LOCATION URL */
//export const GET_RESTAURANTS_LIST = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=11.9343684&lng=79.8255499&page_type=DESKTOP_WEB_LISTING";
//export const GET_RESTAURANT_MENU = "https://www.swiggy.com/dapi/menu/v4/full?lat=11.9343684&lng=79.8255499&menuId=";
// 22.5846015725177, 88.2345418494675  lat=12.9351929&lng=77.62448069999999
/* BANGALORE LOCATION URL */
export const GET_RESTAURANTS_LIST =
  "https://instafood.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999";
export const GET_RESTAURANT_MENU =
  "https://instafood.onrender.com/api/menu?lat=12.9351929&lng=77.62448069999999&restaurantId=";

/* Shimmer - Number of cards & items to be displayed */
export const SHIMMER_RES_CARDS_COUNT = 8;
export const SHIMMER_MENU_ITEMS_COUNT = 4;

/* Github - username, blog name */
export const GITHUB_USER_NAME = "HarshithaSolai";
export const GITHUB_BLOG_NAME = "Learn-React-With-Harshi";

/* Github API getuser */
export const GITHUB_GET_USER = "https://api.github.com/users/";

/* Social Media Links */
export const GITHUB_LINK = "https://github.com/HarshithaSolai";
export const LINKEDIN_LINK = "https://www.linkedin.com/in/harshitha-sv/";
export const GMAIL_LINK = "mailto:solaiharshitha0@gmail.com";

/* User Address - Checkout  */
export const USERS_ADDRESS_LIST = [
  {
    id: "01",
    addressType: "Home",
    addressDescription: "Andul, Sarkar Lane, Howrah, West Bengal",
  },
];

/* Payment Method - Checkout  */
export const PAYMENT_METHODS = [
  {
    id: "01",
    paymentType: "Pay Online",
    paymentMethod: ["UPI / Card Payment"],
  },

  {
    id: "02",
    paymentType: "Pay Offline",
    paymentMethod: ["Cash On Delivery"],
  },
];

/* Mock FAQ */
export const FAQ = [
  {
    id: 473,
    title: "Can I edit my order?",
    description:
      "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
  },
  {
    id: 474,
    title: "I want to cancel my order",
    description:
      "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.",
  },
  {
    id: 475,
    title: "Will Insta Food be accountable for quality/quantity? ",
    description:
      "Quantity and quality of the food is the restaurants' responsibility. However in case of issues with the quality or quantity, kindly submit your feedback and we will pass it on to the restaurant.",
  },
  {
    id: 476,
    title: "Is there a minimum order value?",
    description:
      "We have no minimum order value and you can order for any amount. ",
  },
  {
    id: 477,
    title: "Do you charge for delivery?",
    description:
      "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
  },
  {
    id: 478,
    title: "How long do you take to deliver?",
    description:
      "Standard delivery times vary by the location selected and prevailing conditions. Once you select your location, an estimated delivery time is mentioned for each restaurant.",
  },
  {
    id: 479,
    title: "What are your delivery hours?",
    description:
      "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
  },
  {
    id: 481,
    title: "Is single order from many restaurants possible?",
    description:
      "We currently do not support this functionality. However, you can place orders for individual items from different restaurants.",
  },
];
