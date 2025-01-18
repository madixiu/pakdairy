'use client';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { apiUrl } from '@/lib/api';
import Details from './DetailsComponent';
import Image from 'next/image'; 
function Product() {
  const params = useParams();
  const group = decodeURIComponent(params.group);
  const [id, ...stringParts] = group.split('-');
  const groupName = stringParts[0]; // Renamed to avoid overwriting
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl(`/api/products/category/${id}/`));
        const result = await response.json();
        const responseData = result.products || [];

        // Filter the data based on the group name
        const filteredData = responseData.filter(
          (item) => item.group === groupName
        );

        // If filteredData is not empty, set the products array
        if (filteredData.length > 0) {
          setData(filteredData[0].products); // Access the products array of the first filtered item
        } else {
          setData([]); // Set to empty array if no products found
        }

        console.log('====================================');
        console.log(filteredData);
        console.log('====================================');
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, groupName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="">
      <div className="flex justify-center bg-white w-full">
        <div className="grid grid-cols-3 max-w-[80%] h-[75vh] w-full">
          <div className="flex justify-center items-center border-r col-span-2 border-slate-200 h-full relative">
            <div className="relative w-[50%] h-[80%] flex items-center justify-center">
              <Image
                src={'/drop.png'}
                className="opacity-30"
                alt={'drop'}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="relative w-[70%] h-[80%]">
                {/* <Image
                        src={ImgUrl(data.category.image)}
                        alt={data.category.title}
                        fill
                        style={{ objectFit: 'cover' }}
                      /> */}
              </div>
            </div>
          </div>
          <div className="flex justify-start border-x border-slate-300 shadow-sm relative h-full">
            <div className='flex flex-col p-7 w-full'>
              <div className='flex flex-row gap-2'>
                <span className='text-black font-bold'>{data[0].category}</span>
                <span className='text-primary font-bold'>{groupName}</span>
              </div>
              <div className='flex flex-col gap-2 w-20'>
                <div className='flex justify-center px-10 py-1 rounded-xl border-2 border-primary text-center hover:cursor-pointer hover:bg-slate-200 hover:border-blue-500  transition-all duration-500 ease-in-out'>
                  <span className='text-sm'>وزن</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='my-16'>
        <Details />
      </div>

      <h1>Product Group: {groupName}</h1>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.product_name}>
            <p>{item.product_name}</p>
          </div>
        ))
      ) : (
        <p>No products found in this group.</p>
      )}
    </div>
  );
}

export default Product;
