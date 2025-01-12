'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; // Import useRouter

function ProductsCategory() {
  const router = useRouter(); // Initialize useRouter
  const categories = [
    {
      id: 1,
      svg: 'milk',
      name: 'شیر',
      href: '#',
    },
    {
      id: 7,
      svg: 'doogh',
      name: 'دوغ',
      href: '#',
    },
    {
      id: 5,
      svg: 'cheese',
      name: 'پنیر',
      href: '#',
    },
    {
      id: 4,
      svg: 'butter',
      name: 'کره',
      href: '#',
    },
    {
      id: 8,
      svg: 'icecream',
      name: 'بستنی',
      href: '#',
    },
    {
      id: 2,
      svg: 'yogurt',
      name: 'ماست',
      href: '#',
    },
    {
      id: 3,
      svg: 'cream',
      name: 'خامه',
      href: '#',
    },
    // {
    //   id: 6,
    //   svg: 'powder',
    //   name: 'پودری',
    //   href: '#',
    // },
  ];

  const handleCategoryClick = (id) => {
    // Handle the click event for the category
    router.push(`/products/category/${id}`); // Navigate to the news detail page
    // console.log(`Clicked on category: ${id}`);
    // You can also navigate to category.href or perform other actions here
  };

  return (
    <div className="mx-20 mt-10 h-32">
      <h2 className="text-2xl font-bold text-right mb-10">محصولات</h2>
      <div className="flex justify-center items-center h-full rounded-lg">
        {categories.map((category) => (
          <div
            key={category.id}
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
              rounded-lg
            "
            onClick={() => handleCategoryClick(category.id)} // Move onClick here
          >
            {/* Border Animation Layer */}
            <div
              className="
                absolute 
                inset-0 
                border-b-2 
                border-transparent 
                group-hover:border-slate-300 
                group-hover:border-opacity-50
                transition-all 
                duration-100 
                ease-in-out 
                z-0
              "
            ></div>

            {/* Hover Background Layer with Top to Bottom Animation */}
            <div
              className="
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
              "
            ></div>

            {/* Content Container */}
            <div
              className="
                flex 
                flex-col 
                justify-center 
                items-center 
                relative 
                z-10 
                transform 
                group-hover:scale-105 
                transition-transform 
                duraپودرtion-300 
                پودرease-in-out
              "
            >
              <Image
                src={`/svg/categories/${category.svg}.svg`}
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
              <span
                className="
                  text-slate-600 
                  text-sm 
                  group-hover:text-slate-800 
                  transition-colors 
                  duration-300
                "
              >
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
