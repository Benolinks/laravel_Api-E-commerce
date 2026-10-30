import { Link} from "react-router-dom";
import { IoMdClose, IoMdMenu, IoMdSearch } from "react-icons/io";
import { useEffect, useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<string|null|boolean>(true);

  const [isFocused, setIsFocused] = useState('/')

  // const [screenWidth,  setScreenwidth] = useState( window.innerWidth < 768)

  

  const desktop = "xl:p-2 xl:flex xl:static xl:flex-row xl:gap-9 md:flex lg:flex lg:static md:static md:flex-row xl:flex-row md:gap-5 xl:gap-4";


  useEffect(()=>{
    const handleWidth = () => {
      const isMobile = window.innerWidth < 768;
      if (isMobile===true) {
        setIsOpen(true);
      }
    }

    window.addEventListener(("resize"), handleWidth);
    

    return ()=>{
      window.removeEventListener("resize", handleWidth);
      
    }
  },[]);

  return (
    <div>
      {/* div for all  header  */}
      <div
        className="shadow-md bg-gray-100 
      px-4 py-2 flex items-center justify-between "
      >
        <div className="flex-col ps-3  xl:ms-10 cursor-pointer ">
          <Link
            to="/"
            className="text-[#a855f7] text-2xl 
          font-extrabold"
          >
            RICHFOOD
          </Link>
          <p className="text-gray-500">
            FAST FOOD & RESTAURANT </p>
        </div>

        {/* NAV Links  */}

        <div
          className={`
            font-bold
        text-[#1e1b4b] bg-[#f3e8ff] xl:bg-white md:bg-white  
        shadow-xl rounded-xl p-2.5
          absolute right-10 top-20 flex-col flex gap-2

          ${ !isOpen ? "flex" : "hidden"} ${desktop}
         

        `} 
        >
          <Link
            to="/"

            className={`hover:bg-[#a855f7]  
            p-2 transition-all duration-500 
            rounded-lg hover:text-[#f3e8ff]
           
             ${isFocused 
              ? "border-amber-500 hover:border-b-4" 
              : "border-0 border-none"}`}
           
          
            
              
            onClick={()=> setIsFocused('/')}
          >
            
            Home
          </Link>
          <Link
            to="/About"
           className={`hover:bg-[#a855f7]  
            p-2 transition-all duration-500 
            rounded-lg hover:text-[#f3e8ff]
             ${isFocused 
              ? "border-amber-500 hover:border-b-4" : ""}`}
            onClick={()=> setIsFocused('/About')}
          >
            About
          </Link>
          <Link
            to="/Menu"
            className={`hover:bg-[#a855f7]  
            p-2 transition-all duration-500 
            rounded-lg hover:text-[#f3e8ff]
             ${isFocused 
              ? "border-amber-500 hover:border-b-4" 
              : ""}`}
            onClick={()=> setIsFocused('/Menu')}
          >
            Menu
          </Link>
          <Link
            to="/Chef"
           className={`hover:bg-[#a855f7]  
            p-2 transition-all duration-500 
            rounded-lg hover:text-[#f3e8ff]
             ${isFocused 
              ? "border-amber-500 hover:border-b-4" : ""}`}
            onClick={()=> setIsFocused('/Chef')}
          >
            Chef
          </Link>
          <Link
            to="Reservation"
           className={`hover:bg-[#a855f7]  
            p-2 transition-all duration-500 
            rounded-lg hover:text-[#f3e8ff]
             ${isFocused 
              ? "border-amber-500 hover:border-b-4" : ""}`}
            onClick={()=> setIsFocused('/Reservation')}
          >
            Reservation
          </Link>
          <Link
            to="Review"
           className={`hover:bg-[#a855f7]  
            p-2 transition-all duration-500 
            rounded-lg hover:text-[#f3e8ff]
             ${isFocused 
              ? "border-amber-500 hover:border-b-4" : ""}`}
            onClick={()=> setIsFocused('/Review')}
          >
            Reviews
          </Link>
        </div>

        {/*Order now   */}
        <div
          className=" xl:flex items-center
        justify-between gap-2  hidden me-14 cursor-pointer"
        >
          <h1
            className="text-xl font-bold 
          text-[#1e1b4b]"
          >
            <IoMdSearch />
          </h1>
          <button
            type="button"
            className="
          px-2 py-2  rounded-lg bg-[#a855f7] 
          text-[#f3e8ff] font-bold cursor-pointer"
          >
            Order Now
          </button>
        </div>

        <div className="pe-10 xl:hidden md:hidden lg:hidden">
          <button
            type="button"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <div 
            style={{ fontSize: 30, 
              color: "#a855f7" }}>
               
              {isOpen  ? <IoMdMenu /> : <IoMdClose />}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
