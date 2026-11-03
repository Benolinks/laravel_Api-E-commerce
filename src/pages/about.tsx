import { FaAward, FaLeaf } from "react-icons/fa";
import about from "../../sarab/img/about1.jpg";
import { TbTruckDelivery } from "react-icons/tb";

const About = () => {
  return (
    <main>
      <div
        className="flex flex-col lg:flex-row xl:flex-row
       py-4 w-full m-auto gap-6 px-6 sm:px-10 md:px-16 
       lg:px-20 xl:px-24 2xl:px-32 "
      >
        {/* first section image  */}
        <div
          className="flex flex-col 
      items-center justify-center text-center 
      md:text-left md:items-start md:justify-start
     
      
        xl:w-[45%] 
        md:my-auto
        "
        >
          <img
            src={about}
            alt="About Us"
            className="rounded-2xl shadow-2xl
       
   
    
        
         border-2
        "
          />
        </div>

        {/* second  section write-up */}
        <div
          className="flex flex-col items-center justify-center 
          text-center md:text-left md:items-start 
          md:justify-start m-auto  
      
      
        xl:w-[50%] 
     
         "
        >
          <h2
            className="text-2xl font-bold text-[#1e1b4b] 
            border-b-4 border-[#b7971a] pb-2 text-center"
            id="About"
          >
            Our Story
          </h2>
          <h1 className="text-4xl font-extrabold text-[#1e1b4b]">
            We Invite You to Visit Our{" "}
            <strong className="text-[#b7971a]">
              Food Restaurant</strong>
          </h1>
          <p className="text-lg text-[#1e1b4b] mt-4">
            Founded in 2012, Sarab began as a small corner 
            joint with a big
            dream - to serve food that brings people together. Today we're proud
            to serve thousands of happy customers every 
            week with the same
            passion that started it all.
          </p>

          {/* text with icons  */}

          {/* first text  */}
          <div className="flex flex-col text-justify">
            <div
              className="flex flex-row gap-4 
            items-center text-center align-middle "
            >
              <FaLeaf
                className="text-center align-middle mt-4"
                style={{ color: "#b7971a", fontSize: "1.5rem" }}
              />
              <div>
                <h3
                  className="text-lg text-[#1e1b4b] 
               mt-4 font-bold"
                >
                  100% Fresh Ingredients
                </h3>
              </div>
            </div>
            <p>
              We source locally and sustainably. 
              Every ingredient is hand-picked
              daily for maximum freshness.
            </p>
          </div>

          {/* second text  */}
          <div className="flex flex-col text-justify">
            <div
              className="flex flex-row gap-4 
            items-center text-center align-middle "
            >
              <FaAward
                className="text-center align-middle mt-4"
                style={{ color: "#b7971a", fontSize: "1.5rem" }}
              />
              <div>
                <h3
                  className="text-lg text-[#1e1b4b] 
               mt-4 font-bold"
                >
                  Award-Winning Recipes
                </h3>
              </div>
            </div>
            <p>
              r signature recipes have won national 
              culinary awards 5 years in a
              row.
            </p>
          </div>

          {/* third text */}
          <div className="flex flex-col text-justify">
            <div
              className="flex flex-row gap-4 
            items-center text-center align-middle "
            >
              <TbTruckDelivery
                className="text-center align-middle mt-4"
                style={{ color: "#b7971a", fontSize: "1.5rem" }}
              />
              <div>
                <h3
                  className="text-lg text-[#1e1b4b] 
               mt-4 font-bold"
                >
                  Lightning-Fast Delivery
                </h3>
              </div>
            </div>
            <p>
              Order online and get hot, fresh food at
               your door in under 25
              minutes, guaranteed.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
