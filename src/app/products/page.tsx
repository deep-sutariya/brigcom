"use client";
import { productData } from "@/lib/data"; // Assuming your data is exported as productData
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

// Define types for the product items
type ProductItem = {
  name: string;
  about: string;
  usage: string[];
  benefits: string[];
  varieties: string[];
  sourcingPlaces: string[];
};

type ProductCategory = {
  ayurvedaAndHerbs: ProductItem[];
  spices: ProductItem[];
  oilseeds: ProductItem[];
};

export default function Products() {
  const [visibleItems, setVisibleItems] = useState<{ [key: string]: boolean }>(
    {}
  );

  const toggleVisibility = (productHeading: string, itemName: string) => {
    setVisibleItems((prevState) => ({
      ...prevState,
      [`${productHeading}-${itemName}`]: !prevState[`${productHeading}-${itemName}`],
    }));
  };

  return (
    <div>
      <div className="w-fit mx-auto mt-14 sm:mt-20">
        <div className="font-main text-xl lg:text-3xl font-semibold text-gray-700">
          Our Product Range
        </div>
        <div className="mt-1 lg:mt-2 border-b-3 rounded-full max-w-[30%] mx-auto border-[#169EBE]"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 py-12 md:py-16 px-5 md:px-16 max-w-screen-xl mx-auto my-3">
        {Object.keys(productData).map((categoryKey) => {
          const categoryItems = productData[categoryKey as keyof ProductCategory];

          return (
            <div
              key={categoryKey}
              className="bg-blue-50/50 py-3 px-4 sm:p-6 rounded-lg shadow-md"
            >
              <div className="font-bold text-lg lg:text-2xl text-gray-700 mb-4 font-main">
                {categoryKey.replace(/([A-Z])/g, " $1").toUpperCase()}
              </div>

              <div className="space-y-3">
                {categoryItems.map((item, index) => (
                  <div
                    key={item.name}
                    className={`py-3 md:py-4 px-3 md:px-4 ${
                      index % 2 === 0 ? "bg-blue-100/80" : "bg-blue-100/50"
                    } rounded-lg`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="lg:text-lg text-gray-800 font-details">
                        {item.name}
                      </div>
                      <button
                        className="ml-2 text-[#169EBE] animate-topdown font-semibold hover:text-[#6fcbdf] duration-200 transition-transform cursor-pointer"
                        onClick={() => toggleVisibility(categoryKey, item.name)}
                      >
                        {visibleItems[`${categoryKey}-${item.name}`] ? (
                          <FaMinus />
                        ) : (
                          <FaPlus />
                        )}
                      </button>
                    </div>

                    <div
                      className={`animate-topdown overflow-hidden ${
                        visibleItems[`${categoryKey}-${item.name}`]
                          ? "h-fit"
                          : "h-0"
                      }`}
                    >
                      {visibleItems[`${categoryKey}-${item.name}`] && (
                        <div className="my-4 text-sm text-gray-500 font-details pr-1">
                          <p>{item.about}</p>
                          <div className="mt-3 font-semibold text-gray-600">
                            Usage:
                          </div>
                          <ul className="list-disc pl-5 mt-1">
                            {item.usage.map((usage, idx) => (
                              <li key={idx} className="text-gray-600">
                                {usage}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 font-semibold text-gray-600">
                            Benefits:
                          </div>
                          <ul className="list-disc pl-5 mt-1">
                            {item.benefits.map((benefit, idx) => (
                              <li key={idx} className="text-gray-600">
                                {benefit}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 font-semibold text-gray-600">
                            Varieties:
                          </div>
                          <ul className="list-disc pl-5 mt-1">
                            {item.varieties.map((variety, idx) => (
                              <li key={idx} className="text-gray-600">
                                {variety}
                              </li>
                            ))}
                          </ul>
                          <div className="mt-3 font-semibold text-gray-600">
                            Sourcing Places:
                          </div>
                          <ul className="list-disc pl-5 mt-1">
                            {item.sourcingPlaces.map((place, idx) => (
                              <li key={idx} className="text-gray-600">
                                {place}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}