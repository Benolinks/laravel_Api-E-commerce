
type ReusableTextProps = {
  name: string;
  description: string;
  strong: string;
  id?: string;
  className1?: string;
  className2?: string;
};
const ReusableText = ({name, description,strong, id, className1, className2}: ReusableTextProps) => {
  return (
   <div
     id={id}
    >
        <h4 
       
        className={`text-3xl font-medium 
        text-[#1e1b4b] border-b-4 w-max  m-auto border-[#b7971a] ${className1}`}>
         {name}
        </h4>
        <h1 className={`text-4xl gap-2 font-extrabold text-[#1e1b4b] ${className2}`}>
          {description}
          <strong
           className="text-[#b7971a]">
             {strong}
          </strong>
        </h1>
       
        </div>
  )
}

export default ReusableText

