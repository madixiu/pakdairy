'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch('http://192.168.20.61:8000/api/news/')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the data to check its structure
        setNews(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className='mt-10'>
      {news.length > 0 ? (
        <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
          {news.map((item, i) => (
            <BentoGridItem
              key={item.id}
              title={item.title}
              description={item.summary}
              image={'http://192.168.20.61:8000/media/news_images/1.jpg'} // Assuming your API returns an image URL
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
