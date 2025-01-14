'use client';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { apiUrl } from '@/lib/api';

function Product() {
  const params = useParams();
  const group = decodeURIComponent(params.group);
  const [id, ...stringParts] = group.split('-');
  const groupName = stringParts[0]; // Renamed to avoid overwriting
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl(`/api/products/category/${id}/`));
        const result = await response.json();
        const responseData = result.products || [];
        
        // Filter the data based on the group name
        const filteredData = responseData.filter((item) => item.group === groupName);
        
        // If filteredData is not empty, set the products array
        if (filteredData.length > 0) {
          setData(filteredData[0].products); // Access the products array of the first filtered item
        } else {
          setData([]); // Set to empty array if no products found
        }

        console.log('====================================');
        console.log(filteredData);
        console.log('====================================');
      } catch (err) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id, groupName]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container">
      <h1>Product Group: {groupName}</h1>
      {data && data.length > 0 ? (
        data.map((item) => (
          <div key={item.product_name}>
            <p>{item.product_name}</p>
          </div>
        ))
      ) : (
        <p>No products found in this group.</p>
      )}
    </div>
  );
}

export default Product;