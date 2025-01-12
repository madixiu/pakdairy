'use client';
import React, { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from '@/components/ui/pagination';
import Image from 'next/image';
import { ImgUrl } from '@/lib/api';
import { fallbackImage } from '@/lib/constant';
import { useRouter } from 'next/navigation';
export default function CategoryProductListClient({ data }) {
  const router = useRouter();
  const products = data.products || [];
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const currentItems = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const handleProductClick = (group) => {
    console.log(group);
    router.push(`/product/${group}`);
    // router.push({
    //   pathname: `/product/${group}`,
    //   query: { data: additionalData },
    // });
  };
  return (
    <div>
      {/* Category Section */}
      <div className="flex justify-center bg-white">
        <div className="grid grid-cols-3 max-w-[80%] h-[75vh] w-full">
          <div className="flex justify-center items-center border-r col-span-2 border-slate-200 h-full relative">
            <div className="relative w-[50%] h-[80%] flex items-center justify-center">
              <Image
                src={'/drop.png'}
                className="opacity-30"
                alt={data.category.title}
                fill
                style={{ objectFit: 'cover' }}
              />
              <div className="relative w-[70%] h-[80%]">
                <Image
                  src={ImgUrl(data.category.image)}
                  alt={data.category.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center border-x border-slate-300 shadow-sm relative h-full">
            {data.category.decorative_image && (
              <Image
                src={ImgUrl(data.category.decorative_image)}
                alt={data.category.title}
                fill
                style={{ objectFit: 'cover' }}
              />
            )}
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="flex flex-col my-5 py-8 px-16">
        <h1 className="text-3xl font-bold">{data.category.title}</h1>
        <div className="py-4">
          <span className="leading-10">
            {data.category.description ? data.category.description : ''}
          </span>
        </div>
      </div>

      {/* Products Section with Pagination */}
      <div className="flex justify-center bg-white py-4">
        <div className="grid grid-cols-3 w-[60%]">
          {currentItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center aspect-square border m-2 shadow-sm rounded-xl border-slate-200 overflow-hidden hover:cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300 ease-in-out"
              onClick={() => handleProductClick(item.group)}
            >
              <div className="relative w-[70%] h-[70%]">
                <Image
                  src={item.image ? ImgUrl(item.image) : fallbackImage}
                  alt={data.category.title}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="flex flex-row">
                <span className="me-1">{item.products[0]?.category || ''}</span>
                <span>{item.group || ''}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination using ShadCN */}
      <div className="flex justify-center items-center gap-4 my-4">
        <Pagination>
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage > 1) handlePageChange(currentPage - 1);
                }}
              />
            </PaginationItem>
            {/* Page numbers */}
            {[...Array(totalPages).keys()].map((page) => (
              <PaginationItem key={page}>
                <PaginationLink
                  href="#"
                  isActive={page + 1 === currentPage}
                  onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(page + 1);
                  }}
                >
                  {page + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            {/* <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem> */}
            <PaginationItem>
              <PaginationNext
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  if (currentPage < totalPages)
                    handlePageChange(currentPage + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
    </div>
  );
}
