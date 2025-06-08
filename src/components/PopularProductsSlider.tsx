"use client";

import { useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProductCard from "./ProductsCard";
import {
  popularProducts as productList,
  productNametoUrlMapping,
} from "@/lib/data";

export const PopularProductsSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollAmount = 266;

  const nextSlide = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }
    }
  };

  const prevSlide = () => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;

      if (scrollLeft <= 0) {
        scrollRef.current.scrollTo({
          left: scrollRef.current.scrollWidth,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
      }
    }
  };

  return (
    <div className="relative overflow-x-hidden mx-auto pt-5 z-0 min-w-screen">
      <button
          onClick={prevSlide}
          className="absolute left-25 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 shadow p-2 rounded-full z-50 cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>

      <div
        ref={scrollRef}
        className="flex overflow-x-auto scroll-smooth gap-4 max-w-[1078px] mx-auto px-4 no-scrollbar"
      >
        {productList.map((product, index) => (
          <div key={`${product.title}-${index}`} className="shrink-0 w-[250px]">
            <ProductCard
              imageUrl={product.image}
              title={product.title}
              productName={product.scientificName}
              className="w-full"
              link={`/products/${productNametoUrlMapping[product.type]}/${
                productNametoUrlMapping[product.title]??""
              }`}
              type="productType"
            />
          </div>
        ))}
      </div>

      <button
          onClick={nextSlide}
          className="absolute right-25 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 shadow p-2 rounded-full z-10 cursor-pointer"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
    </div>
  );
};
