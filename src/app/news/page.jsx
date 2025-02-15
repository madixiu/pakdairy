'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { Card } from '@/components/ui/card';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { apiUrl } from '@/lib/api';
import { fallbackImage } from '@/lib/constant';
function News() {
  const [news, setNews] = useState([]);
  const router = useRouter(); // Initialize useRouter

  useEffect(() => {
    fetch(apiUrl(`/api/news/`))
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data to check its structure
        setNews(data);
      })
      .catch((error) => console.error(error));
  }, []);


  // Function to handle navigation
  const handleNewsClick = (id) => {
    router.push(`/news/${id}`); // Navigate to the news detail page
  };

  return (
    <div className='mt-10'>
      {news.length > 0 ? (
        <BentoGrid className="w-full mx-auto md:auto-rows-[20rem] md:px-28 px-10">
          {news.map((item) => (
            item.active &&
            <BentoGridItem
              key={item.id}
              title={item.title}
              description={item.summary}
              image={item?.image ? item.image : fallbackImage} // Assuming your API returns an image URL
              onClick={() => handleNewsClick(item.id)} // Add onClick handler
            />
          ))}
        </BentoGrid>
      ) : (
        <div className='flex justify-center items-center'>
          <p>در حال بارگذاری</p>
        </div>
      )}
    </div>
  );
}

export default News;