import Link from "next/link";
import React from "react";

interface ImageCardProps {
  imageUrl: string;
  title: string;
  link: string;
}

const ProductCard: React.FC<ImageCardProps> = ({ imageUrl, title, link }) => {
  return (
    <Link
      href={link}
      className=" w-1/6 rounded-lg overflow-hidden shadow-lg bg-white"
    >
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="text-lg font-main text-gray-500 font-semibold mb-2 text-center">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default ProductCard;
