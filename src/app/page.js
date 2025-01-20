import SlidingProducts from './Components/Home/SlidingProducts';
import ProductsCategory from './Components/Home/ProductsCategory';
import DescriptionComponent from './Components/Home/DescriptionComponent';
import NewProducts from './Components/Home/NewProducts';
import { apiUrl } from '@/lib/api';
export default function Home() {
  const CategoryData = fetch(apiUrl('/api/category/'))
  .then((res) => res.json())
  .then((categoryData) => {
      console.log(categoryData); // Use the fetched data here
      return categoryData;
  })
  .catch((error) => {
      console.error('Error fetching category data:', error);
  });
  
  return (
    <div className="flex flex-col py-2">
      {/* Sliding Products Section */}
      <div>
        <SlidingProducts />
      </div>

      {/* Products Category Section */}
      <div className='mx-20 my-20'>
        <ProductsCategory categories={CategoryData} />
      </div>

      <div className='mx-20 my-20'>
        <NewProducts />
      </div>
      {/* Description Component Section */}
      <div>
        <DescriptionComponent />
      </div>
    </div>
  );
}
