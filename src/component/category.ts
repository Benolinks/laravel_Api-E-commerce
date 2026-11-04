import categoryOne from "../../sarab/img/category/1.jpg";
import categoryTwo from "../../sarab/img/category/2.jpg";
import categoryThree from "../../sarab/img/category/3.jpg";
import categoryFour from "../../sarab/img/category/4.jpg";
import categoryFive from "../../sarab/img/category/5.jpg";
import categorySix from "../../sarab/img/category/6.jpg";

import categoryMenuone from "../../sarab/img/menu/1.jpg";
import categoryMenuTwo from "../../sarab/img/menu/2.jpg";
import categoryMenuThree from "../../sarab/img/menu/3.jpg";
import categoryMenuFour from "../../sarab/img/menu/4.jpg";
import categoryMenuFive from "../../sarab/img/menu/5.jpg";
import categoryMenuSix from "../../sarab/img/menu/6.jpg";

type CategoryImageType = {
  id:number;
  image: string;
  name: string;
};
type CategoryImageMenu = {
  id:number;
  image: string;
  name: string;
  category: string;
  description: string;
  prices: number;
  slashed_Price: number;
};


type CategoryMenuType = {
  id: number;
  name: string;
};




export const CategoryImage: CategoryImageType[] = [
  {
      id: 1,
    image: categoryOne,
    name:"All Items "
  
  },
  {
      id: 2,
    image: categoryTwo,
    name:"Burger "
  
  },
  {
      id: 3,
    image: categoryThree,
    name:"Pizza"
   
  },
  {
      id: 4,
    image: categoryFour,
    name:"Fried Chicken"
   
  },
  {
      id: 5,
    image: categoryFive,
    name:"Wrap"
   
  },
  {
      id: 6,
    image: categorySix,
    name:"Dessert"
   
  },
];


export const CategoryImageMenu: CategoryImageMenu[] = [
  {
      id: 1,
    image: categoryMenuone,
    name:"BURGERS ",
    category:"Classic Smash Burger",
    description:"Double smashed patty, cheddar cheese, caramelized onions, house pickles and our legendary special sauce. Made fresh to order on a toasted brioche bun.",
    prices: 14.99,
    slashed_Price: 19.99,
  
  },
  {
      id: 2,
    image: categoryMenuTwo,
    name:"Burger ",
    category:"Classic Smash Burger",
    description:"Double smashed patty, cheddar cheese, caramelized onions, house pickles and our legendary special sauce. Made fresh to order on a toasted brioche bun.",
    prices: 14.99,
    slashed_Price: 19.99,
  
  },
  {
      id: 3,
    image: categoryMenuThree,
    name:"Pizza",
    category:"Classic Smash Burger",
    description:"Double smashed patty, cheddar cheese, caramelized onions, house pickles and our legendary special sauce. Made fresh to order on a toasted brioche bun.",
    prices: 14.99,
    slashed_Price: 19.99,
   
  },
  {
      id: 4,
    image: categoryMenuFour,
    name:"Fried Chicken",
    category:"Fried Chicken",
    description:"Crispy fried chicken breast, served with your choice of sides.",
    prices: 12.99,
    slashed_Price: 16.99,
   
  },
  {
      id: 5,
    image: categoryMenuFive,
    name:"Wrap",
    category:"Wrap",
    description:"Freshly made wrap with your choice of fillings.",
    prices: 10.99,
    slashed_Price: 14.99,
   
  },
  {
      id: 6,
    image: categoryMenuSix,
    name:"Dessert",
    category:"Dessert",
    description:"Delicious dessert options to satisfy your sweet tooth.",
    prices: 8.99,
    slashed_Price: 12.99,
   
  },
];





export const CategoryMenu: CategoryMenuType[] = [
  
{
  id:1,
  name:"All",
},
{
  id:2,
  name:"Burger",
},
{
  id:3,
  name:"Pizza",
},
{
  id:4,
  name:"Fried Chicken",
},
{
  id:5,
  name:"Wrap",
},
{
  id:6,
  name:"Desserts",
},
{
  id:7,
  name:"Pasta",
},

];
