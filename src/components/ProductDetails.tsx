"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

const InfoCard = ({ title, value }: { title: string; value: string }) => (
  <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition-transform hover:scale-[1.02]">
    <h3 className="text-md font-bold text-gray-700 font-heading">{title}</h3>
    <p className="text-sm text-gray-500 mt-1">{value}</p>
  </div>
);

const KeyValueTable = ({
  title,
  data,
}: {
  title: string;
  data: Record<string, string>;
}) => (
  <section className="p-6 mb-6">
    <h2 className="text-xl font-bold text-gray-700 font-heading mb-6 uppercase">
      {title}
    </h2>
    <table className="w-full table-auto text-sm text-gray-500 border border-[#169EBE]/30">
      <tbody>
        {Object.entries(data).map(([key, value]) => (
          <tr
            key={key}
            className="border-b border-[#169EBE]/30 last:border-0 hover:bg-[#169EBE]/5"
          >
            <td className="py-2 pl-5 font-bold capitalize text-gray-600 border-r border-[#169EBE]/30 w-1/3 font-heading">
              {key.replace(/([A-Z])/g, " $1")}
            </td>
            <td className="py-2 pl-5 text-gray-500">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </section>
);

const BulletList = ({ title, items }: { title: string; items: string[] }) => (
  <section className="p-6">
    <h2 className="text-xl font-bold text-gray-700 font-heading mb-6 uppercase">{title}</h2>
    <ul className="space-y-3 text-gray-700">
      {items.map((item, idx) => (
        <li key={idx} className="flex items-center space-x-2">
          <ChevronRight className="h-4 w-4 text-[#169EBE] font-bold flex-shrink-0" />
          <span className="text-sm">{item}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default function ProductDetails({
  product,
}: {
  product: Record<string, any>;
}) {
  const [productName, productData] = Object.entries(product)[0];

  const {
    SPECIFICATIONS,
    "GLOBAL MARKET DEMAND": demand,
    "High Demand Countries": countries,
    "USAGE AND BENEFITS": usage,
    INGRIDIENCE,
    "EXPORT PORTS": ports,
  } = productData;

  const nutrition = {
    Calories: INGRIDIENCE.Calories,
    "Total Carbohydrate": INGRIDIENCE["Total Carbohydrate"],
    "Dietary Fiber": INGRIDIENCE["Dietary Fiber"],
    Protein: INGRIDIENCE.Protein,
    Fat: INGRIDIENCE.Fat,
    Moisture: INGRIDIENCE.Moisture,
    Vitamins: INGRIDIENCE.Vitamins,
    Minerals: INGRIDIENCE.Minerals,
  };

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-6 font-details text-gray-900">
      <div className="max-w-5xl mx-auto space-y-6">
        <section className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 font-heading">
            {productName}
          </h1>
          <p className="text-lg text-gray-500 mt-1 font-heading italic">
            {SPECIFICATIONS["Scientific Name"]}
          </p>
          <div className="w-16 h-1 mt-4 mx-auto bg-[#169EBE] rounded-full" />
        </section>

        <section className=" p-6 rounded-xl space-y-7 mt-16">
          <h2 className="text-xl font-bold text-gray-700 font-heading mb-6 uppercase">
            Global Market Demand
          </h2>
          <p className="text-gray-600 text-sm">{demand}</p>
          <p className="text-gray-700 text-sm">
            <strong>High Demand Countries:</strong> {countries}
          </p>
          <p className="text-gray-700 text-sm">
            <strong>Export Ports:</strong> {ports}
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-6">
          <KeyValueTable title="Specification" data={SPECIFICATIONS} />
        </section>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
          <KeyValueTable title="Nutrition Facts" data={nutrition} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <BulletList
            title="Health Benefits"
            items={usage["Health Benefits"]
              .split(",")
              .map((s: any) =>
                (
                  s.trim().charAt(0).toUpperCase() +
                  s.trim().slice(1).toLowerCase()
                ).trim()
              )}
          />
          <BulletList
            title="Uses"
            items={usage.Uses.split(",").map((s: any) =>
              (
                s.trim().charAt(0).toUpperCase() +
                s.trim().slice(1).toLowerCase()
              ).trim()
            )}
          />
        </div>
      </div>
    </main>
  );
}
