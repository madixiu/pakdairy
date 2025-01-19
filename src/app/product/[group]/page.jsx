'use client';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { apiUrl } from '@/lib/api';
import Details from './DetailsComponent';
import Image from 'next/image';
import { fallbackImage } from '@/lib/constant';
function Product() {
  const params = useParams();
  const group = decodeURIComponent(params.group);
  const [id, ...stringParts] = group.split('-');
  const groupName = stringParts[0]; // Renamed to avoid overwriting
  const [data, setData] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedWeightIndex, setSelectedWeightIndex] = useState(0);
  // const [imageKey, setImageKey] = useState(0); // For forcing re-render during animation
  const [direction, setDirection] = useState('right'); // Track slide direction

  const handleWeightChange = (index) => {
    if (index > selectedWeightIndex) {
      setDirection('right'); // Slide to the right
    } else {
      setDirection('left'); // Slide to the left
    }
    setSelectedWeightIndex(index);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl(`/api/products/category/${id}/`));
        const result = await response.json();
        const responseData = result.products || [];
        // const responseData2 = result.relative_products || [];
        console.log('===========ORIGINAL===================');
        console.log(responseData);
        
        // Filter the data based on the group name
        const filteredData = responseData.filter(
          (item) => item.group === groupName
        );

        // If filteredData is not empty, set the products array
        if (filteredData.length > 0) {
          setData(filteredData[0].products); // Access the products array of the first filtered item
          setRelatedProducts(filteredData[0].relative_products); // Access the products array of the first filtered item)
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

  // useEffect(() => {
  //   // Trigger re-render for the fade-in effect
  //   setImageKey((prevKey) => prevKey + 1);
  // }, [selectedWeightIndex]);

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
              <div className="relative w-[500px] h-[500px] overflow-hidden">
                <div className="relative w-full h-full">
                  {data.map((item, index) => (
                    <Image
                      key={index}
                      src={item.image || fallbackImage}
                      alt={item.weight_volume}
                      fill
                      className={`absolute top-0 left-0 w-full h-full transition-transform duration-500 ${
                        selectedWeightIndex === index
                          ? 'translate-x-0 z-10'
                          : direction === 'right'
                          ? 'translate-x-full'
                          : '-translate-x-full'
                      }`}
                      style={{ objectFit: 'cover' }}
                    />
                  ))}
                </div>
                <div className="flex mt-4 gap-2">
                  {data.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleWeightChange(index)}
                      className={`px-4 py-2 rounded ${
                        selectedWeightIndex === index
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200'
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-start border-x border-slate-300 shadow-sm relative h-full">
            <div className="flex flex-col p-7 w-full mt-20 h-full">
              <div className="flex flex-row gap-2">
                <span className="text-black font-bold">{data[0].category}</span>
                <span className="text-primary font-bold">{groupName}</span>
              </div>

              {/* Main weight section */}
              <div className="flex flex-col gap-2 mt-10 max-w-48">
                <div>
                  <span>وزن</span>
                </div>

                {/* List of weights with scroll */}
                <div className="flex flex-col w-full overflow-y-auto overflow-x-hidden gap-2 max-h-[400px]">
                  {data.map((item, index) => (
                    item.weight_volume &&
                    <div
                      key={index}
                      onClick={() => setSelectedWeightIndex(index)}
                      className={`flex justify-center py-3   rounded-xl border-2 text-center hover:cursor-pointer hover:opacity-80 transition-all duration-400 ease-in-out ${
                        selectedWeightIndex === index
                          ? 'border-blue-400 bg-primary text-white'
                          : 'border-primary'
                      }`}
                    >
                      <span
                        className={`text-sm whitespace-nowrap ${
                          selectedWeightIndex === index
                            ? 'text-white'
                            : 'text-primary'
                        }`}
                      >
                        {item.weight_volume}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-16">
        <Details />
      </div>
    
      <h1>Product Group: {groupName}</h1>
      <h2>{data[selectedWeightIndex].image}</h2>
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
