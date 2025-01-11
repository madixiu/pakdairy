import { apiUrl, ImgUrl } from "@/lib/api";
import Image from "next/image";
import CategoryProductListClient from "./CategoryProductListClient";

export default async function CategoryProductList({ params }) {
  const { id } = params;

  try {
    const response = await fetch(apiUrl(`/api/products/category/${id}/`));
    const data = await response.json();

    return (
      <div>
        {/* Pass data to the client component */}
        <CategoryProductListClient data={data} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return (
      <div className="flex justify-center items-center">
        Error loading products
      </div>
    );
  }
}
