"use client";
import ProductCard from "@/components/ProductsCard";
import {
  productData,
  productUrltoNameMapping,
  productNametoUrlMapping,
} from "@/lib/data";
import { useParams } from "next/navigation";

export default function Page() {
  const { productType } = useParams();
  const productName =
    productUrltoNameMapping[
      productType as keyof typeof productUrltoNameMapping
    ] || "Unknown Product";
  return (
    <main>
      <div className="w-fit mx-auto mt-14 sm:mt-20">
        <div className="font-main text-xl lg:text-3xl font-semibold text-gray-700">
          Indian {productName} Exporter
        </div>
        <div className="mt-1 lg:mt-2 border-b-3 rounded-full max-w-[30%] mx-auto border-[#169EBE]"></div>
      </div>
      <div className="flex items-center justify-center gap-x-10 py-4 px-8 my-20">
        {(productData[productType as keyof typeof productData] || []).map(
          (item, index) => {
            return (
              <ProductCard
                key={index}
                imageUrl="/4.jpg"
                title={item.name}
                link={`${productType}/${productNametoUrlMapping[item.name]}`}
              />
            );
          }
        )}
      </div>
    </main>
  );
}
