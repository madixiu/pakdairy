"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const SlidingProducts = () => {
    const products = [
        { name: "ماست پروبیوتیک", description: "Rich and creamy with a delicate texture.", image: "/decorative1.png" },
        { name: "ماست گلدن ", description: "همزده پرچرب", image: "/decorative2.png" },
        { name: "شیر بدون لاکتوز", description: "پاستوریزه کم چرب", image: "/decorative3.png" },
        { name: "کره", description: "", image: "/decorative4.png" },
        { name: "پنیر پیتزا", description: "", image: "/decorative5.png" },


    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFadingOut, setIsFadingOut] = useState(false);
    const [isFadingIn, setIsFadingIn] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsFadingOut(true); // Start fade-out
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length); // Update content
                setIsFadingOut(false); // Reset fade-out
                setIsFadingIn(true); // Start fade-in
                setTimeout(() => setIsFadingIn(false), 1000); // End fade-in
            }, 1000); // Duration matches fade-out
        }, 4000); // Total interval duration
        return () => clearInterval(interval);
    }, [products.length]);

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 lg:h-[90vh] h-[50vh] shadow-sm">

            {/* Right Part: Text Description */}
            <div className="col-span-1 flex items-center justify-center bg-white p-8 rounded-lg">
                <div className="text-center">
                    <h1
                        key={`title-${currentIndex}`}
                        className={`text-3xl font-bold mb-4 transition-opacity duration-1000 ${
                            isFadingOut ? "opacity-0" : isFadingIn ? "opacity-100" : "opacity-100"
                        }`}
                    >
                        {products[currentIndex].name}
                    </h1>
                    <p
                        key={`desc-${currentIndex}`}
                        className={`text-lg text-gray-600 transition-opacity duration-1000 ${
                            isFadingOut ? "opacity-0" : isFadingIn ? "opacity-100" : "opacity-100"
                        }`}
                    >
                        {products[currentIndex].description}
                    </p>
                </div>
            </div>
            {/* Left Part: Sliding Image */}
            <div className="col-span-2 relative overflow-hidden">
                {products.map((product, index) => (
                    <Image
                        key={index}
                        src={product.image}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className={`absolute transition-opacity duration-1000 ${
                            index === currentIndex ? "opacity-100" : "opacity-0"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default SlidingProducts;
