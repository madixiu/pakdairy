'use client';
import { useParams } from 'next/navigation';

function Product() {
  const params = useParams();
  const group = decodeURIComponent(params.group);

  
  console.log(group);
  
  return ( 
    <div className="container">
      <h1>Product Group: {group}</h1>
    </div>
   );
}

export default Product;
