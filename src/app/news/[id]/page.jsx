import Link from 'next/link';
import { apiUrl } from '@/lib/api';
import parse from 'html-react-parser';
import Image from 'next/image';

export default async function NewsDetail({ params }) {
  const id = (await params).id;

  const fetchData = async () => {
    const response = await fetch(apiUrl(`/api/news/${id}/`));
    const data = await response.json();
    return data;
  };

  const fetchLastNews = async () => {
    const response = await fetch(apiUrl(`/api/news/`));
    const data = await response.json();
    const res = data.filter((item) => item.id !== parseInt(id));
    return res.slice(0, 7);
  };

  const data = await fetchData();
  const lastNews = await fetchLastNews();

  // Fallback image URL
  const fallbackImage = '/path/to/nophoto.jpg'; // Replace with the actual path to your fallback image

  return (
    <div className="">
      <div className="grid grid-cols-6 p-5">
        <div className="col-span-1">
          <div className="">
            <span className="text-sm">آخرین اخبار</span>
          </div>
          {lastNews &&
            lastNews.map((item) => (
              <Link href={`/news/${item.id}`} key={item.id}>
                <div className="bg-white p-3 m-3 rounded-md shadow-lg border border-gray-300 cursor-pointer hover:bg-gray-100 transition-transform duration-200 hover:scale-105">
                  <Image
                    src={item.image || fallbackImage} // Use fallback image if `item.image` is empty
                    alt={item.title || 'No image available'} // Optional alt text
                    layout="responsive"
                    width={500}
                    height={300}
                    className="w-full"
                  />
                  <p className="text-xs mt-1">{item.title}</p>
                </div>
              </Link>
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
