import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface ImageCardProps {
  imageUrl: string;
  title: string;
  link: string;
  className?: string;
}

const ProductCard: React.FC<ImageCardProps> = ({ imageUrl, title, link, className }) => {
  return (
    <Link
      href={link}
      className={cn("rounded-lg overflow-hidden shadow-lg bg-white", className)}
    >
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className="md:text-lg font-main text-gray-500 font-semibold mb-2 text-center">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default ProductCard;