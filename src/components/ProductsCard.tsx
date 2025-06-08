import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface ImageCardProps {
  imageUrl: string;
  title: string;
  link: string;
  type?: "product" | "productType";
  productName?: string;
  productscientificName?: string;
  className?: string;
}
const ProductCard: React.FC<ImageCardProps> = ({
  imageUrl,
  title,
  link,
  type = "product",
  productName,
  productscientificName,
  className,
}) => {
  return (
    <Link
      href={link}
      className={cn(
        className,
        "rounded-lg overflow-hidden shadow-lg bg-white group"
      )}
    >
      {type == "productType" ? (
        <div className="relative w-full h-48 overflow-hidden rounded-t-md">
          <img
            className="w-full h-full object-cover"
            src={imageUrl}
            alt={title}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
        </div>
      ) : (
        <div className=" flex items-center justify-center text-center gap-x-4 border py-8 px-8 rounded-t-lg font-main text-sm bg-gradient-to-b from-black/5 to-transparent group-hover:bg-gradient-to-t group-hover:from-black/5 group-hover:to-gray-100/50">
          <div className="  border-gray-300 pr-4 text-xs md:text-base min-h-[30px] md:min-h-[48px] ">
            {productName}
          </div>
        </div>
      )}
      <div className="relative overflow-hidden rounded-b-lg">
        <div className="p-4 bg-white group-hover:shadow-2xl z-10 relative">
          <h2 className="text-sm md:text-lg font-main text-gray-500 font-semibold mb-2 text-center">
            {title}
          </h2>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
