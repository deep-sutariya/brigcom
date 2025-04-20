"use client";
import { productUrltoNameMapping } from "@/lib/data";
import { useParams } from "next/navigation";

export default function Page() {
  const { product } = useParams();
  const productName = productUrltoNameMapping[product as keyof typeof productUrltoNameMapping];
  return (
    <main>
      <div className="w-fit mx-auto mt-14 sm:mt-20">
        <div className="font-main text-xl lg:text-3xl font-semibold text-gray-700">
          Indian {productName} Exporter
        </div>
        <div className="mt-1 lg:mt-2 border-b-3 rounded-full max-w-[30%] mx-auto border-[#169EBE]"></div>
      </div>
      <div className="flex items-center justify-center gap-x-10 p-4 my-20">
        
      </div>
    </main>
  );
}
