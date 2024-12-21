import Image from 'next/image';
import SlidingProducts from './Components/Home/SlidingProducts';
import ProductsCategory from './Components/Home/ProductsCategory';
export default function Home() {
  return (
    <div>
      <SlidingProducts />
      <div>
        <ProductsCategory />
      </div>
      <div className="grid grid-col-[20px_1fr_20px] items-center justify-items-center h-[2400px] p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"></div>
    </div>
  );
}
