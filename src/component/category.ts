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
    name:"PASTA",
    category:"Truffle Mushroom Pasta",
    description:"Al dente tagliatelle tossed with mixed wild mushrooms, freshly shaved black truffle, aged parmesan, fresh thyme and a touch of cream in garlic butter.",
    prices: 16.99,
    slashed_Price: 29.99,
  },
  {
      id: 3,
    image: categoryMenuThree,
    name:"Pizza",
    category:"Margherita Royale",
    description:"San Marzano tomatoes, fresh buffalo mozzarella, fragrant basil leaves, drizzled with Italian truffle oil on a hand-stretched sourdough base..",
    prices: 19.99,
    slashed_Price: 29.99,
   
  },
  {
      id: 4,
    image: categoryMenuFour,
    name:"Fried Chicken",
    category:"Nashville Hot Chicken",
    description:"Extra-crispy fried chicken tossed in our signature fiery Nashville spice blend, served with honey drizzle and house pickles on a toasted brioche bun.",
    prices: 12.99,
    slashed_Price: 16.99,
   
  },
  {
      id: 5,
    image: categoryMenuFive,
    name:"Wrap",
    category:"Loaded Fajita Wrap",
    description:"Grilled chicken strips, saut�ed bell peppers and onions, sour cream, fresh guacamole and salsa wrapped in a warm flour tortilla with melted cheddar.",
    prices: 10.99,
    slashed_Price: 14.99,
   
  },
  {
      id: 6,
    image: categoryMenuSix,
    name:"Dessert",
    category:"Nutella Lava Cake",
    description:"Warm molten chocolate cake with a gooey Nutella center, served alongside Madagascar vanilla bean ice cream with salted caramel drizzle and fresh berries.",
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
