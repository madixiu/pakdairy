import { apiUrl, ImgUrl } from '@/lib/api';
import Image from 'next/image';
export default async function CategoryProductList({ params }) {
  const id = (await params).id;

  try {
    const response = await fetch(apiUrl(`/api/products/category/${id}/`));
    const data = await response.json();
    const products = await data.products;
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    return (
      <>
        <div className="flex justify-center bg-white">
          <div className="grid grid-cols-3 max-w-[80%] h-[75vh] w-full">
            <div className="flex justify-center items-center border-r col-span-2 border-gray-400 h-full relative">
              <div className="relative w-[50%] h-[80%] flex items-center justify-center">
                {/* Set the width of the container */}
                {/* Background Image */}
                <Image
                  src={'/drop.png'}
                  className="opacity-30"
                  alt={data.category.title}
                  layout="fill" // This makes the image fill the parent container
                  objectFit="cover" // This ensures the image covers the entire area
                  quality={100} // Optional: Set the quality of the image
                />
                {/* Foreground Image */}
                <div className="relative w-[70%] h-[80%]">
                  {/* Smaller image container */}
                  <Image
                    src={ImgUrl(data.category.image)}
                    alt={data.category.title}
                    layout="fill" // This makes the image fill the parent container
                    objectFit="cover" // This ensures the image covers the entire area
                    quality={100} // Optional: Set the quality of the image
                  />
                </div>
              </div>
            </div>
            <div className="flex justify-center border-x border-gray-400 relative h-full">
              {/* Set relative positioning */}
              {data.category.decorative_image && (
                <Image
                  src={ImgUrl(data.category.decorative_image)}
                  alt={data.category.title}
                  layout="fill" // This makes the image fill the parent container
                  objectFit="cover" // This ensures the image covers the entire area
                  quality={100} // Optional: Set the quality of the image
                />
              )}
            </div>
          </div>
        </div>
        <div className="flex flex-col my-5 py-8 px-16">
          <h1 className="text-3xl font-bold">{data.category.title}</h1>
          <div className="py-4">
            <span className="leading-10">{data.category.description}</span>
          </div>
        </div>
        <div className="flex justify-center bg-white">
          <div className="grid grid-cols-3 w-[60%]">
            {products.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center aspect-square border m-1 border-slate-200"
              >

                <span>
                    {item.category}
                </span>
                <span>
                  {item.feature}
                </span>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return <div>Error loading products</div>;
  }
}
