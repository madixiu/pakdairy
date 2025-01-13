'use client';
import { useParams } from 'next/navigation';
import { apiUrl } from '@/lib/api';
function Product() {
  const params = useParams();
  var group = decodeURIComponent(params.group);
  const [id, ...stringParts] = group.split('-');
  group = stringParts[0];
  console.log(group); 
  console.log(id);
  const fetchData = async () => {
    const response = await fetch(apiUrl(`/api/products/category/${id}/`));
    const data = await response.json();
    // console.log(data);
    let responseData = data.products
    console.log(responseData);
    return responseData.filter((item) => item.group === group);
  };
  const data = fetchData();
  console.log(data);
  
  return ( 
    <div className="container">
      <h1>Product Group: {group}</h1>
      {data &&
        data.map((item) => (
          <div key={item.id}>
            <p>{item.product_name}</p>
          </div>
        ))
      }
    </div>
   );
}

export default Product;
