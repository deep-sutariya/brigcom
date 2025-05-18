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
        <div className="font-main text-lg lg:text-3xl font-semibold text-gray-700 text-center">
          Indian {productName} Exporter
        </div>
        <div className="mt-2 lg:mt-4 border-b-3 rounded-full max-w-[30%] mx-auto border-[#169EBE]"></div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-4 lg:gap-10 py-4 px-5 md:px-16 lg:px-28 my-10 lg:my-20">
        {(productData[productType as keyof typeof productData] || []).map(
          (item, index) => {
            return (
              <ProductCard
                key={index}
                imageUrl="/4.jpg"
                title={item.name}
                link={`${productType}/${productNametoUrlMapping[item.name]}`}
                className="w-full"
                productName={item.name}
                productscientificName={item.scientificName}
              />
            );
          }
        )}
      </div>
    </main>
  );
}
