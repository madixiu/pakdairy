import SlidingProducts from './Components/Home/SlidingProducts';
import ProductsCategory from './Components/Home/ProductsCategory';
import DescriptionComponent from './Components/Home/DescriptionComponent';
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
      <div>
        <ProductsCategory categories={CategoryData} />
      </div>

      <div className='py-10'>
        here
      </div>
      {/* Description Component Section */}
      <div>
        <DescriptionComponent />
      </div>
    </div>
  );
}
