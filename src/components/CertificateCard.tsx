import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface CertificateCardType {
  imageUrl: string;
  title: string;
  link: string;
  className?: string;
}

const CertificateCard: React.FC<CertificateCardType> = ({ imageUrl, title, link, className }) => {
  return (
    <Link
      href={link}
      className={cn("overflow-hidden shadow-lg bg-white rounded-xs", className)}
    >
      <img className="w-full h-56 md:h-64 object-fill" src={imageUrl} alt={title} />
      <div className="p-4">
        <h2 className=" text-sm md:text-base font-main text-gray-500 font-semibold mb-2 text-center">
          {title}
        </h2>
      </div>
    </Link>
  );
}

export default CertificateCard