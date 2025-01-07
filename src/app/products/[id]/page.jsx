import { apiUrl } from "@/lib/api";

export default async function ProductDetail({ params }) {
  const id = (await params).id;
  // const data = await fetch('https://api.vercel.app/blog')
  // const post = await data.json()
  // Example usage in a component
  // const data = await fetch(apiUrl(`/api/products/category/${id}/`))

  const fetchData = async () => {
    const response = await fetch(apiUrl(`/api/products/category/${id}/`));
    const data = await response.json();
    return data;
  };
  const data = await fetchData();
  // const data = await fetchData();
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return(
    <div>
      <h1>Product Detail with ID:</h1>
      <span>{id}</span>
      <div>
        {data.products.map((item) => (
          <div key={item.id}>
            <p>{item.product_name}</p>
            <p>{item.feature}</p>
          </div>
        ))}
      </div>
    </div>
  )

}