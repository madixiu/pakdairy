import Image from "next/image";
function ProductsCategory() {
  const categories =[
    { 
      id:"milk",
      name:"شیر",
      href:"#"
    },
    {
      id:"doogh",
      name:"دوغ",
      href:"#"
    },
    {
      id:"cheese",

      name:"پنیر",
      href:"#"
    },
    {
      id:"butter",

      name:"کره",
      href:"#"
    },
    {
      id:"icecream",

      name:"بستنی",
      href:"#"
    },
    {
      id:"yogurt",

      name:"ماست",
      href:"#"
    },
    {
      id:"cream",

      name:"خامه",
      href:"#"
    },
    {
      id:"caramel",

      name:"کارامل",
      href:"#"
    }
  ]
  return ( 

    
    <div className=" mx-20 mt-10 h-32  shadow-sm">
    <div className="flex justify-center items-center h-full">
      {categories.map((category, index) => (
        <div 
          key={category.name} 
          className="
            relative 
            flex 
            w-full 
            h-full 
            items-center 
            justify-center 
            group 
            cursor-pointer 
            overflow-hidden
            transition-all 
            duration-200 
            ease-in-out
            hover:border-slate-400 
            hover:border-opacity-50
          "
        >
          {/* Border Animation Layer */}
          <div className="
            absolute 
            inset-0 
            border-b-2 
            border-transparent 
            group-hover:border-slate-400 
            group-hover:border-opacity-50
            transition-all 
            duration-100 
            ease-in-out 
            z-0
          "></div>
  
          {/* Hover Background Layer with Top to Bottom Animation */}
          <div className="
            absolute 
            inset-0 
            bg-primary
            bg-opacity-0 
            group-hover:bg-opacity-30 
            transform 
            group-hover:translate-y-0 
            -translate-y-full 
            transition-all 
            duration-300 
            ease-in-out 
            z-0
          "></div>
  
          {/* Content Container */}
          <div className="
            flex 
            flex-col 
            justify-center 
            items-center 
            relative 
            z-10 
            transform 
            group-hover:scale-105 
            transition-transform 
            duration-300 
            ease-in-out
          ">
            <Image
              src={`/categories/${category.id}.svg`}
              alt={category.name}
              width={32}
              height={32}
              objectFit="contain"
              
              className="
                w-10 
                h-10
                group-hover:opacity-80 
                transition-opacity 
                duration-300
              "
            />
            <span className="
              text-slate-600 
              text-sm 
              group-hover:text-slate-800 
              transition-colors 
              duration-300
            ">
              {category.name}
            </span>
          </div>
        </div>
      ))}
    </div>
  </div>
   );
}

export default ProductsCategory;