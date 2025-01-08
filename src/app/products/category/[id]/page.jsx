
import { apiUrl } from '@/lib/api';
export default async function CategoryProductList({ params }) {
  const id = (await params).id;

  
  try {
    const response = await fetch(apiUrl(`/api/products/category/${id}/`));
    const data = await response.json();
    
    return (
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
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return <div>Error loading products</div>;
  }
}
