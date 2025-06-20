"use client";

import ProductCard from "@/components/ProductsCard";
import ProductTable from "@/components/ProductTable";
import {
  productData,
  productUrltoNameMapping,
  productNametoUrlMapping,
} from "@/lib/data";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function Page() {
  const { productType } = useParams();

  const productName =
    productUrltoNameMapping[
      productType as keyof typeof productUrltoNameMapping
    ] || "Unknown Product";

  const productBannerName = productName.includes("Ayurveda")
    ? "herbs"
    : productName.includes("Spices")
    ? "spices"
    : "ayurvedicandnutraceutical";

  const productTypeData =
    productData?.[productType as keyof typeof productData];

  return (
    <main>
      <div className="w-full mx-auto">
        <div className="w-full h-[260px] md:h-[320px] relative overflow-hidden shadow-lg">
          <img
            src={`/background/${productBannerName}.jpg`}
            alt="Product Type Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute z-30 inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-48 text-white ">
            <h1 className=" text-4xl md:text-5xl font-main font-extrabold mb-4 text-blue-50/90 ">
              {productName}
            </h1>
            <div className=" text-sm md:text-base font-main text-blue-50 font-semibold flex gap-x-2 md:gap-x-3">
              <Link href="/">HOME</Link>
              <span>/</span>
              <h3 className=" uppercase">{productName}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-fit mx-auto mt-14 sm:mt-20">
        <div className="font-main text-lg lg:text-3xl font-semibold text-gray-700 text-center">
          Indian {productName} Exporter
        </div>
        <div className="mt-2 lg:mt-4 border-b-3 rounded-full max-w-[30%] mx-auto border-[#169EBE]"></div>
      </div>
      <div className=" w-full my-10 lg:my-20">
        {productType == "ayurvedicandnutraceutical" ? (
          (
            Object.keys(productTypeData) as (keyof typeof productTypeData)[]
          ).map((item, index) => {
            return (
              <div
                key={item}
                className="flex flex-col items-center justify-center mb-5 max-w-5xl mx-auto px-5 md:px-16 lg:px-28"
              >
                <ProductTable
                  title={item}
                  productList={productTypeData[item]}
                />
              </div>
            );
          })
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5 lg:gap-10 py-4 px-5 md:px-16 lg:px-28">
            {(
              Object.keys(productTypeData) as (keyof typeof productTypeData)[]
            ).map((item, index) => {
              return (
                <ProductCard
                  key={index}
                  imageUrl="/4.jpg"
                  title={item}
                  link={`/products/${productType}/${productNametoUrlMapping[item]}`}
                  className="w-full"
                  productName={productTypeData[item]["SPECIFICATIONS"]["Scientific Name"]}
                />
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
}
