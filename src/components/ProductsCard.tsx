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
const ProductCard: React.FC<ImageCardProps> = ({ imageUrl, title, link, type = "product", productName,  productscientificName, className }) => {
  return (
    <Link
      href={link}
      className={cn("rounded-lg overflow-hidden shadow-lg bg-white", className)}
    >
      {
        type == "productType" ?
          <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
        :
          <div className=" flex items-center justify-center gap-x-4 border py-8 px-8 rounded-t-lg font-main text-sm">
            <div className="  border-gray-300 pr-4">{productName}</div>
            {/* <div>{productscientificName}</div> */}
          </div>
      }
      <div className="p-4">
        <h2 className="md:text-lg font-main text-gray-500 font-semibold mb-2 text-center">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default ProductCard;