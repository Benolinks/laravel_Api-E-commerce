import about from "../../sarab/img/about1.jpg";

const About = () => {
  return (
    <main>
      <div className="flex flex-col md:flex-row 
       py-4  w-full">

     
    {/* first section image  */}
      <div className="flex flex-col items-center justify-center text-center md:text-left md:items-start md:justify-start">
        <img src={about} alt="About Us"
        className="rounded-2xl shadow-2xl
        md:w-96
        lg:w-96
        xl:w-96 
         
        "
        />
        
      </div>
    
    {/* second  section write-up */}
      <div className="flex flex-col items-center justify-center text-center md:text-left md:items-start md:justify-start m-auto">
        <h2 
        className="text-2xl font-bold text-[#1e1b4b] border-b-4 border-[#b7971a] pb-2 text-center"
        id="About"
        >Our Story</h2>
        <h1 className="text-4xl font-extrabold text-[#1e1b4b]">
          We Invite You to Visit 
          Our <strong className="text-[#b7971a]">Food Restaurant</strong> 
        </h1>
            

      </div>
       </div>
    
    </main>
  )
}

export default About
