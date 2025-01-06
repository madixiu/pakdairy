'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import { Card } from '@/components/ui/card';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { apiUrl } from '@/lib/api';
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
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {news.map((item) => (
            <BentoGridItem
              key={item.id}
              title={item.title}
              description={item.summary}
              image={item?.image ? item.image : apiUrl('/media/news_images/1.jpg') } // Assuming your API returns an image URL
              onClick={() => handleNewsClick(item.id)} // Add onClick handler
            />
          ))}
        </BentoGrid>
      ) : (
        <div className='flex justify-center items-center'>
          <p>در حال بارگزاری</p>
        </div>
      )}
    </div>
  );
}

export default News;