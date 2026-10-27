import one from "../../sarab/img/blog/one.jpg";

const Home = () => {
  return (
    <main className="mx-auto flex min-h-[calc(100vh-80px)] w-full max-w-7xl flex-col items-center justify-center gap-10 px-6 py-12 sm:px-10 md:flex-row md:gap-12 lg:px-16">
      <div className="max-w-xl text-center md:text-left">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#a855f7]">
          Freshly made, always delicious
        </p>
        <h1 className="text-4xl font-extrabold leading-tight text-[#1e1b4b] sm:text-5xl lg:text-6xl">
          DELICIOUS <span className="text-[#b7971a]">FAST FOOD</span> FOR EVERY MOMENT
        </h1>
        <p className="mx-auto mt-6 max-w-lg text-base leading-7 text-gray-500 sm:text-xl xl:text-xl md:mx-0">
          Experience bold flavors crafted from premium ingredients. From crispy
          burgers to gourmet pizzas, every bite is an adventure worth savoring.
        </p>
      </div>

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
    </main>
  );
};

export default Home;
