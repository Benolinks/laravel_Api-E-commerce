import ReusableText from '../component/reusableText';
import { IoBookOutline } from "react-icons/io5";
import { TbTruckDelivery } from "react-icons/tb";
import { CategoryImage, CategoryImageMenu, CategoryMenu } from "../component/category";
import { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";

import offimage from "../../sarab/img/off-img.jpg";


const Menu = () => {
  const [isActive, setIsActive] = useState<number | null>(1);

  const now = new Date()

  const [time, setTime] = useState(now)

  useEffect(()=>{

   const interval = setInterval(()=>{
    setTime(new Date())
    },1000);
    return ()=> clearInterval(interval);
  },[]);



  return (
    <main>
      <div >
        <ReusableText
          name="What's Cooking"
          description="Our Delicious "
          strong="Menu"
          className1="text-center mt-4"
          className2="mt-2 text-center"
          id="Menu"
        />

        <div className="flex flex-row gap-4 items-center m-auto w-fit p-4 flex-wrap justify-center mt-6 " >
          {CategoryMenu.map((category) => {
            return (
              <div key={category.id} >
                <div
                  onLoad={() => setIsActive(1)}
                  onClick={() => setIsActive(category.id)}
                  className={` border border-[#fee685 ] 
                shadow-4xl rounded-4xl py-1 text-center 
                items-center px-4 
              border-[#f3e8ff ]   
              hover:bg-[#f3e8ff]
               hover:text-[#b7971a] 
               transition-all 
               duration-300 
               ${
                 isActive === category.id
                   ? "text-[#f3e8ff] bg-[#b7971a] hover:bg-[#b7971a]  "
                   : ""
               }`}
                >
                  {" "}
                  <h2>{category.name}</h2>
                </div>
              </div>
            );
          })}
        </div>

        {/* Menu image Items */}

        <div className="flex flex-row gap-4 items-center m-auto w-fit p-4 flex-wrap justify-center mt-6 ">
          {CategoryImageMenu.map((item) => {
            return (
              <div
                onClick={() => setIsActive(item.id)}
                key={item.id}
                className={`flex flex-col gap-2 items-center 
                justify-center p-4 m-4 shadow-2xl rounded-2xl border-2 xl:w-75 md:w-70   
                transition-all duration-300
              ${isActive === item.id ? "border-[#b7971a]" : "border-transparent"}`}
              >
                <img
                  className=" rounded-3xl 
                 border-2
                  border-[#fee685] shadow-lg"
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                />
                <h4
                  className="text-lg font-bold items-start 
                flex justify-start text-left  border-[#fee685] p-2 
                rounded-md"
                >
                  {item.name.toUpperCase()}
                </h4>
                <h1
                  className="text-2xl font-extrabold items-start 
                flex justify-start text-left text-[#1e1b4b]  border-[#fee685] p-2 
                rounded-md"
                >
                  {item.category}
                </h1>
                <h4
                  className="text-md font-medium items-start 
                flex justify-start text-left text-[#1e1b4b] border-[#fee685] p-2 
                rounded-md"
                >
                  {item.description.length > 80
                    ? item.description.substring(0, 80) + "..."
                    : item.description}
                </h4>

                <div className="flex flex-row gap-4 items-center justify-between w-full font-bold text-xl">
                  <div className="flex flex-row gap-4 items-center justify-start">
                    <h2>${item.prices.toFixed(2)}</h2>

                    <del>${item.slashed_Price.toFixed(2)}</del>
                  </div>

                  <h3 className="text-4xl text-[#b7971a]">
                    <MdAddCircle />
                  </h3>
                </div>
              </div>
            );
          })}
        </div>

        {/* full menu button  */}
        <div
          className="flex flex-row gap-2 w-max items-center 
          text-center align-middle mt-4 mb-5 m-auto
           text-[#f3e8ff] bg-[#b7971a] py-2 px-3 
           rounded-2xl shadow-2xl hover:bg-[#f3e8ff] font-bold
            hover:text-[#b7971a] transition-all duration-300"
        >
          <IoBookOutline />
          <button>View Full Menu</button>
        </div>

     {/* percentage off */}
        
          <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col items-center justify-center gap-10 px-6 py-12 sm:px-10 md:flex-col xl:flex-row lg:px-16">
                  <div className="max-w-xl
                  
                  text-center md:text-left">
                    <p
                      className="mb-4 text-sm font-bold 
                      uppercase tracking-[0.2em] text-[#a855f7]"
                      id="Home"
                    >
                      Limited Time Offer
                    </p>
                    <h1
                      className="text-4xl font-extrabold
                   leading-tight
                    text-[#1e1b4b] 
                    sm:text-5xl lg:text-6xl"
                    >
                      
                      Get 30% Off
Our Signature{" "}
                      <span className="text-[#b7971a] font-extrabold">Burger</span>Meal
                    </h1>
                    <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-gray-500 sm:text-xl xl:text-xl md:mx-0">
                      Don't miss our weekend special - grab our award-winning signature burger combo 
                      with loaded fries and a premium shake at an unbeatable price.
                    </p>
                    {/* timer */}
                    <div className="flex flex-row 
                    justify-start  w-max 
                    rounded-3xl mt-8">

                     <div className="p-4 bg-[#a855f7] 
                      rounded-3xl border-2 border-[#f3e8ff]
                      text-[#1e1b4b] font-bold text-4xl">
                        {String(time.getHours()).padStart(2, "0")}
                        <p className="text-lg font-medium">Hours</p>
                      </div> 
                     <div className="p-4 rounded-3xl
                     border-2 border-[#f3e8ff] bg-[#a855f7] 
                      text-[#1e1b4b] font-bold text-4xl">
                        {String(time.getMinutes()).padStart(2 ,"0")}
                        <p className="text-lg font-medium">minutes</p>
                        </div> 
                     <div className="p-4 rounded-3xl
                     border-2 border-[#f3e8ff] bg-[#a855f7] 
                      text-[#1e1b4b] font-bold text-4xl">
                        {String(time.getSeconds()).padStart(2,"0")}
                        <p className="text-lg font-medium">Seconds</p>
                        </div> 
                    </div>
          
                    {/* Explore and watch button  */}
                    {/* full menu button  */}
        <div
          className="flex flex-row gap-2 w-max items-center 
           align-middle mt-4 mb-5 font-bold
           text-[#f3e8ff] bg-[#b7971a] py-2 px-3 
           rounded-2xl shadow-2xl hover:bg-[#f3e8ff]
            hover:text-[#b7971a] transition-all duration-300"
        >
          <TbTruckDelivery />
          <button>Grab The Deal</button>
        </div>
                  </div>
                  {/*  image div  */}
                  <div >
                    <div
                      className=" -inset-3 rounded-4xl
                   bg-[#fee685]/70 sm:-inset-5 "
                    />
                    <img
                      className=" 
                       w-full rounded-4xl
                     object-cover shadow-xl aspect-auto"
                      src={offimage}
                      alt="cripsy burger"
                    />
                  </div>
                  </div>

          {/* ========================= */}

          {/* food show case section  */}

          <ReusableText name='Food Showcase' 
          description='Lets See Our' 
          strong=' Fast Food' 
          className2='flex text-center m-auto justify-center' />

          <div className='flex gap-4 
          flex-wrap m-auto p-10 
          align-middle items-center 
          justify-center w-full'>
            {
              CategoryImage.map((category)=>{
                return (
                  <div key={category.id}>
                    <div>
                      <img 
                      className='rounded-2xl w-full'
                      src={category.image} alt="" />
                    </div>

                  </div>
                )
              })
            }

          </div>
      </div>
    </main>
  );
};

export default Menu;
