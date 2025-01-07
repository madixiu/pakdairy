import { apiUrl } from '@/lib/api';
import parse from 'html-react-parser';
import Image from 'next/image';
export default async function NewsDetail({ params }) {
  const id = (await params).id;
  // const data = await fetch('https://api.vercel.app/blog')
  // const post = await data.json()
  // Example usage in a component

  const fetchData = async () => {
    const response = await fetch(apiUrl(`/api/news/${id}/`));
    const data = await response.json();
    return data;
  };
  const fetchLastNews = async () => {
    const response = await fetch(apiUrl(`/api/news/`));
    const data = await response.json();
    // console.log(data.slice(0, 5));
    return data.slice(0, 10);
  };
  // const content = params;
  // Fetch data and log it
  const data = await fetchData();
  const lastNews = await fetchLastNews();
  console.log(lastNews);

  return (
    <div className="bg-gray-500">
      <div className="bg-white grid grid-cols-6 p-5">
        <div className="col-span-1">
          <div className="">
            <span className="text-sm">آخرین اخبار</span>
          </div>
          {lastNews &&
            lastNews.map((item) => (
              <div
                key={item.id}
                className="bg-white p-3 m-3 rounded-md shadow-lg border border-gray-300 cursor-pointer hover:bg-gray-100 transition-transform duration-200 hover:scale-105"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="responsive" // Makes the image responsive
                  width={500} // Set the width for the aspect ratio
                  height={300} // Set the height for the aspect ratio
                  className="w-full" // Optional: can be used for additional styling
                />
                <p className="text-xs mt-1">{item.title}</p>
              </div>
            ))}
        </div>
        <div className="col-span-5 flex flex-col items-center">
          <h1>{data.title}</h1>
          <p>{data.summary}</p>
          <div>{parse(data.content)}</div>
        </div>
      </div>
    </div>
  );
}
