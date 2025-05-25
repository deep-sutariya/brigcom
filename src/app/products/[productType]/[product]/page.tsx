"use client";

import { useParams, usePathname } from "next/navigation";
import { productData, productUrltoNameMapping } from "@/lib/data";
import ProductDetails from "@/components/ProductDetails";

export default function ProductPage() {
  const { product } = useParams();
  const path = usePathname();
  const productType = path.split("/")[2];

  const productName =
    productUrltoNameMapping[product as keyof typeof productUrltoNameMapping];
  
  console.log("productName", productData.spices);
  

  let productObj;
  if (productType === "ayurvedaandherbs") {
    productObj = productData.ayurvedaandherbs[productName as keyof typeof productData.ayurvedaandherbs];
  } else if (productType === "spices") {
    productObj = productData.spices[productName as keyof typeof productData.spices];
  }

  if (!productObj) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        Product not found.
      </div>
    );
  }

  return (
    <ProductDetails product={{ [productName]: productObj }} />
  );
}
