"use client";
import { productsData } from "@/lib/data";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function Products() {
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleVisibility = (productHeading: string, item: string) => {
    setVisibleItems((prevState) => ({
      ...prevState,
      [`${productHeading}-${item}`]: !prevState[`${productHeading}-${item}`],
    }));
  };

  return (
    <div className="">
      <div className="w-fit mx-auto mt-14 sm:mt-20">
        <div className="font-main text-xl lg:text-3xl font-semibold text-gray-700">Our Product Range</div>
        <div className="mt-1 lg:mt-2 border-b-3 rounded-full max-w-[30%] mx-auto border-[#169EBE]"></div>
      </div>
      <div className="space-y-8 py-12 md:py-16 px-3 sm:px-6 lg:px-28 max-w-screen-xl mx-auto">
        {productsData.map((product) => (
          <div
            key={product.heading}
            className="bg-blue-50/50 py-3 px-4 sm:p-6 rounded-lg shadow-md"
          >
            <div className="font-bold text-lg lg:text-2xl text-gray-700 mb-4 font-main">
              {product.heading}
            </div>
            <div className="space-y-3">
              {product.items.map((item, index) => (
                <div
                  key={item}
                  className={`py-3 md:py-4 px-3 md:px-4 ${
                    index % 2 === 0 ? "bg-blue-100/80" : "bg-blue-100/50"
                  } rounded-lg`}
                >
                  <div className="flex justify-between items-center">
                    <div className="lg:text-lg text-gray-800 font-details">
                      {item}
                    </div>
                    <button
                      className="ml-2 text-[#169EBE] font-semibold hover:text-[#6fcbdf] duration-200 transition-transform cursor-pointer"
                      onClick={() => toggleVisibility(product.heading, item)}
                    >
                      {visibleItems[`${product.heading}-${item}`] ? (
                        <FaMinus />
                      ) : (
                        <FaPlus />
                      )}
                    </button>
                  </div>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${
                      visibleItems[`${product.heading}-${item}`]
                        ? "max-h-40"
                        : "max-h-0"
                    }`}
                  >
                    {visibleItems[`${product.heading}-${item}`] && (
                      <div className="mt-4 text-sm text-gray-500 font-details text-justify pr-1">
                        <p>
                          This is the description for {item} in{" "}
                          {product.heading}. You can add more details here.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
