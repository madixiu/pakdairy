import SlidingProducts from './Components/Home/SlidingProducts';
import ProductsCategory from './Components/Home/ProductsCategory';
import DescriptionComponent from './Components/Home/DescriptionComponent';

export default function Home() {
  return (
    <div className="space-y-16 p-8">
      {/* Sliding Products Section */}
      <div>
        <SlidingProducts />
      </div>

      {/* Products Category Section */}
      <div>
        <ProductsCategory />
      </div>

      {/* Description Component Section */}
      <div>
        <DescriptionComponent />
      </div>
    </div>
  );
}
