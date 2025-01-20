"use client";
import React, { useEffect, useState } from "react";

const DescriptionComponent = () => {
  const [isImage1Visible, setIsImage1Visible] = useState(false);
  const [isImage2Visible, setIsImage2Visible] = useState(false);
  const [isImage3Visible, setIsImage3Visible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const image1 = document.getElementById("image1");
      const image2 = document.getElementById("image2");
      const image3 = document.getElementById("image3");

      const windowHeight = window.innerHeight;

      if (image1) {
        const rect1 = image1.getBoundingClientRect();
        if (rect1.top <= windowHeight - 100) setIsImage1Visible(true);
      }

      if (image2) {
        const rect2 = image2.getBoundingClientRect();
        if (rect2.top <= windowHeight - 100) setIsImage2Visible(true);
      }

      if (image3) {
        const rect3 = image3.getBoundingClientRect();
        if (rect3.top <= windowHeight - 100) setIsImage3Visible(true);
      }
    };

    // Trigger handleScroll initially in case elements are already in view
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center gap-16 p-8">
      {/* Image 1 */}
      <div
        id="image1"
        className={`w-1/2 aspect-[4/3] self-end bg-gray-300 rounded-2xl transition-opacity duration-1000 ${
          isImage1Visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: "url('/Description1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Image 2 */}
      {/* <div
        id="image2"
        className={`w-1/2 aspect-[5/3] self-start bg-gray-300 rounded-2xl shadow-sm transition-opacity duration-1000 ${
          isImage2Visible ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: "url('/Description2.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div> */}

      {/* Image 3 and 4 in a Row */}
      <div className="flex w-full gap-4">
        <div
          id="image3"
          className={`w-1/2 aspect-[10/6] bg-gray-300 rounded-2xl transition-opacity duration-1000 ${
            isImage3Visible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: "url('/Description2.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div
          id="image4"
          className={`w-1/2 aspect-[10/6] bg-gray-300 rounded-2xl transition-opacity duration-1000 ${
            isImage3Visible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: "url('/certificates.png')",
            backgroundColor:"#fff",
            backgroundSize: "contain", // Preserve the image's aspect ratio
            backgroundRepeat: "no-repeat", // Prevent repetition of the image
            backgroundPosition: "center", // Center the image
          }}
        ></div>
      </div>
    </div>
  );
};

export default DescriptionComponent;
