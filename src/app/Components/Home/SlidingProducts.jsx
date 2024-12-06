"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
const SlidingProducts = () => {
    const products = [
        { name: 'French Cheese', description: 'Rich and creamy with a delicate texture.', image: '/test.jpg' },
        { name: 'Organic Milk', description: 'Fresh and pure milk sourced from organic farms.', image: '/test2.jpg' },
        { name: 'Whipped Cream', description: 'Light and fluffy cream for your desserts.', image: '/test3.jpg' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [products.length]);

    return (
        <div className="flex h-screen w-full">
            {/* Left Part: Sliding Images */}
            <div className="flex-1 relative overflow-hidden">
                {products.map((product, index) => (
                    <Image
                        key={index}
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className={`transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    />
                ))}
            </div>

            {/* Middle Part: Product Name and Description Sliding Bottom to Up */}
            <div className="flex-1 flex items-center justify-center relative">
                <div className="absolute transition-transform duration-1000 transform text-center" style={{ transform: `translateY(${currentIndex * -100}%)` }}>
                    {products.map((product, index) => (
                        <div key={index} className={`h-full ${index === currentIndex ? 'block' : 'hidden'}`}>
                            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
                            <p className="text-lg text-gray-600">{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Part: Full Size Image */}
            <div className="flex-1 relative overflow-hidden">
                <Image
                    src={products[currentIndex].image}
                    alt={products[currentIndex].name}
                    layout="fill"
                    objectFit="cover"
                />
            </div>
        </div>
    );
};

export default SlidingProducts;
