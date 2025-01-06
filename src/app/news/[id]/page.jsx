import { apiUrl } from '@/lib/api';
import parse from 'html-react-parser';
export default async function Page({ params }) {
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
    console.log(data.slice(0, 5));
    
  };
  // const content = params;
  // Fetch data and log it
  const data = await fetchData();
  const lastNews = await fetchLastNews();
  // console.log(data);

  return (
    <div className="bg-gray-500">
      <div className="bg-white grid grid-cols-6">
        <div className="col-span-1">
          <span>last</span>
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
