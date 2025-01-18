import { cn } from '@/lib/utils';
import Image from 'next/image';
export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        'grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-5 gap-4 mx-auto ',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({ title, description, image,onClick }) => {
  return (
    <div onClick={onClick} className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 cursor-pointer">
      <div className="h-48 bg-gray-200 relative"> {/* Fixed height for the image */}
        {image && (
          <Image
            src={image}
            alt={title}
            layout="fill" // Fill the parent container
            objectFit="cover" // Cover the area while maintaining aspect ratio
            className="absolute inset-0"
          />
        )}
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white bg-opacity-70 transition-transform transform translate-y-0">
        <h3 className="text-xs font-semibold">{title}</h3>
        {/* <span className="text-sm">{description}</span> */}
      </div>
    </div>
  );
};

// export default BentoGridItem;
