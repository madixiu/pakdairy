'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
function Products() {
  const router = useRouter();

  const dairyProducts = [
    {id:1  , name: 'Milk',persianName: 'شیر', image: '/images/productsCategories/milk.png' },
    {id:7  , name: 'Doogh',persianName: 'دوغ', image: '/images/productsCategories/doogh.png' },
    {id:5  , name: 'Cheese',persianName: 'پنیر', image: '/images/productsCategories/cheese.png' },
    {id: 4 , name: 'Butter',persianName: 'کره', image: '/images/productsCategories/butter.png' },
    {id: 2 , name: 'Yogurt',persianName: 'ماست', image: '/images/productsCategories/yogurt.png' },
    {id:3  , name: 'Cream',persianName: 'خامه', image: '/images/productsCategories/cream.png' },
    {id: 8 , name: 'Ice Cream',persianName: 'بستنی', image: '/images/productsCategories/icecream.png' },
    // { id: 9 ,name: 'Dessert',persianName: 'دسر', image: '/images/productsCategories/dessert.png' },
  ];

  const handleCategoryClick = (id) => {
    // Handle the click event for the category
    router.push(`/products/category/${id}`); // Navigate to the news detail page
    // console.log(`Clicked on category: ${id}`);
    // You can also navigate to category.href or perform other actions here
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold text-right mb-10">محصولات</h2>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
        {dairyProducts.map((product, index) => (
          <div key={index} className='flex flex-col justify-center items-center' onClick={() => handleCategoryClick(product.id)}>
            <div
              // key={index}
              className="bg-opacity-0 rounded-full overflow-visible h-[300] w-[300] flex items-center justify-center relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out"
            >
              <Image
                src={product.image}
                alt={product.persianName}
                className="absolute z-10 mb-8"
                width={280} // Match the width of the parent div
                height={385} // Match the height of the parent div
                style={{ objectFit: 'cover' }} // Ensure the image is circular
              />
            </div>
            <div>
              <h2 className="text-base  mt-4">{product.persianName}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
