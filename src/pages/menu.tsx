import ReusableText from '../component/reusableText';


import { CategoryImageMenu, CategoryMenu } from '../component/category';
import { useState } from 'react';

const Menu = () => {

  const [isActive, setIsActive] = useState<number | null>(1);
  return (
    <main>
      <div>
        <ReusableText name="What's Cooking" 
        description="Our Delicious " strong="Menu" 
          className1="text-center mt-4"
          className2="mt-2 text-center"
        />

        <div className='flex flex-row gap-4 items-center m-auto w-fit p-4 flex-wrap justify-center mt-6 '>
         {CategoryMenu.map((category)=>{
          return (
            <div key={category.id}
            
            >
              <div
              onLoad={()=>setIsActive(1)}
              onClick={()=>setIsActive(category.id)}
              className={` border border-[#fee685 ] 
                shadow-4xl rounded-4xl py-1 text-center 
                items-center px-4 
              border-[#f3e8ff ]   
              hover:bg-[#f3e8ff]
               hover:text-[#b7971a] 
               transition-all 
               duration-300 
               ${isActive === category.id 
                ? 'text-[#f3e8ff] bg-[#b7971a] hover:bg-[#b7971a]  ' : ''}`}
              >  <h2>{category.name}</h2>
              </div>
           
            </div>
          )
         })}

        
        </div>

        {/* Menu image Items */}

         <div className='flex flex-row gap-4 items-center m-auto w-fit p-4 flex-wrap justify-center mt-6 '>
          {CategoryImageMenu.map((item)=>{
            return (
              <div 
              onClick={()=>setIsActive(item.id)}
              key={item.id}
              className={`flex flex-col gap-2 items-center justify-center p-4 m-4 shadow-2xl rounded-2xl border-2 xl:w-75 md:w-70   transition-all duration-300
              ${isActive === item.id ? 'border-[#b7971a]' : 'border-transparent'}`}>
                <img src={item.image} alt={item.name} />
                <h4 className='text-lg font-bold items-start 
                flex justify-start text-left  border-[#fee685] p-2 
                rounded-md'>
                  {item.name}</h4>
                  <h1 className='text-2xl font-extrabold items-start 
                flex justify-start text-left text-[#1e1b4b]  border-[#fee685] p-2 
                rounded-md'>
                  {item.category}</h1>
                  <h4 className='text-md font-medium items-start 
                flex justify-start text-left text-[#1e1b4b] border-[#fee685] p-2 
                rounded-md'>
                  {item.description.length > 80 
                  ? item.description.substring(0, 80) + "..." :
                   item.description}
                </h4>
              </div>
            )
          })}
         </div>
      </div>
    </main>
  )
}

export default Menu
