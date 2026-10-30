import one from "../../sarab/img/blog/one.jpg";
import { FaCirclePlay } from "react-icons/fa6";
import SlideShow from '../component/slideShow'
import { CategoryImage } from '../component/categoryImage';
import { useState } from "react";

const Home = () => {


  const [isActive, setIsActive] = useState<number | null>(1);

  

   
  
  return (

    <main>
      <div className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col items-center justify-center gap-10 px-6 py-12 sm:px-10 md:flex-row md:gap-12 lg:px-16">
      <div className="max-w-xl text-center md:text-left">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#a855f7]">
          Freshly made, always delicious
        </p>
        <h1 className="text-4xl font-extrabold
         leading-tight
          text-[#1e1b4b] 
          sm:text-5xl lg:text-6xl">
          DELICIOUS <span className="text-[#b7971a] font-extrabold">FAST FOOD</span> FOR EVERY MOMENT
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-gray-500 sm:text-xl xl:text-xl md:mx-0">
          Experience bold flavors crafted from premium ingredients. From crispy
          burgers to gourmet pizzas, every bite is an adventure worth savoring.
        </p>

        {/* Explore and watch button  */}
        <div className="flex gap-9 py-6 ">

          <button 
          className=" 
          rounded-3xl py-6 px-4
         bg-[#b7971a] text-xl 
         text-[#f3e8ff] font-bold hover:p-5">
          Explore Menu</button>

         <div className=" border border-[#1e1b4b] 
          flex flex-row text-center 
          gap-2">
           <FaCirclePlay
             
           style={{
            marginTop: 30,
            scale:2.5,
            marginLeft:20,
            color:"#b7971a",
           }} 
           />
          <button className=" rounded-3xl py-6 px-4
          text-xl font-medium" 
         >  
         watch our story</button>
          </div>
        </div>
      </div>
          {/*  image div  */}
      <div className="relative mx-auto w-full max-w-xl">
        <div className="absolute -inset-3 rounded-4xl bg-[#fee685]/70 sm:-inset-5" />
        <img
          className="relative aspect-4/3 w-full rounded-full object-cover shadow-xl"
          src={one}
          alt="Freshly prepared fast food"
        />
      </div>

     <div>
      <style>{`
       @keyframes ben {
         0%, 100% { transform: translateY(0); }
         50% { transform: translateY(20px); }
       }
       @keyframes delivery {
         0%, 100% { transform: translateY(0); }
         50% { transform: translateY(-30px); }
       }
     `}</style> </div>
     <div style={{
       animationName:"ben",
       animationDuration:"3s",
       animationTimingFunction:"ease-in-out",
       animationIterationCount:"infinite"
     }}

      
    
      
      className=" object-cover absolute right-2 hidden xl:block  ">
        <h3 className=" align-middle 
      text-center py-8 px-4  
       text-lg font-bold
       text-[#1e1b4b] border bg-[#b7971a]
        border-[#1e1b4b]  rounded-lg">Hot Deals</h3>
        </div>
        

        {/* second animated box  */}
      <div
        className=" object-cover absolute left-150 
        hidden  xl:block  "
        style={{
          animationName: "delivery",
          animationDuration: "3s",
          animationTimingFunction: "ease-in-out",
          animationIterationCount: "infinite",
        }}
      >
        <h3 className=" align-middle 
      text-center py-8 px-4  
       text-lg font-bold
       text-[#1e1b4b] border bg-[#b7971a]
        border-[#1e1b4b]  rounded-lg">fast delivery</h3>
        </div>



        


</div>

      {/*  */}
      <SlideShow />


        {/* what we offer */}
        <div className="flex flex-col items-center align-middle justify-center pt-6">
          <h4 className="text-xl font-medium text-[#1e1b4b]">What We Offer </h4>
          <h4 className="text-2xl font-bold">Browse by <span className="text-[#b7971a]">Category </span></h4>

          <p className=" items-center text-center mx-auto mt-6 max-w-lg text-base leading-7 text-gray-500 sm:text-xl xl:text-xl md:mx-0">From sizzling burgers to exotic world cuisines - find your favourite in our menu

          </p>

      {/*  for food, items and colection  */}
          <div className="flex flex-row gap-6 flex-wrap items-center p-3 m-3 justify-center">
            {
              CategoryImage.map((category)=>{
                return(
                 
                    <div 
                    key={category.id}
                    onMouseEnter={() => setIsActive(category.id)}
                   onLoad={() => setIsActive(1)}
                    onClick={()=> setIsActive(category.id)}
                    className={` shadow-2xl
                      bg-[#f3e8ff]
                      rounded-2xl
                      border-2
                      w-35
                      items-center
                      justify-center
                      text-center
                      p-4
                      transition-all
                       duration-900
                        ${isActive === category.id
                          ? "border-[#b7971a]"
                          : "border-transparent"}`}

                      
                      >
                    <img
                    className="rounded-full
                     object-cover 
                     aspect-square 
                     w-25
                     m-auto"
                     
                     
                   
                   src={category.image}
                   alt={`Category ${category.id}`}
                 />
                 <p 
                 className="text-center
                  font-bold "
                 >
                  {category.name}
                  </p>
                </div>
                
                )
              })
            }
          </div>
        </div>
        
        
        
         
    </main>
  );
};

export default Home;
