import { apiUrl } from '@/lib/api';
import parse from 'html-react-parser';
export default async function Page({ params }) {
  const id = (await params).id
  // const data = await fetch('https://api.vercel.app/blog')
  // const post = await data.json()
  // Example usage in a component

const fetchData = async () => {
    const response = await fetch(apiUrl(`/api/news/${id}/`));
    const data = await response.json();
    return data;
};
  // const content = params;
 // Fetch data and log it
 const data = await fetchData();
 console.log(data);
  
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.summary}</p>
      <div>{parse(data.content)}</div>
    </div>
  );
}