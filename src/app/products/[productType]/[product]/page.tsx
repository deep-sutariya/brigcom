"use client";

import { productData, productUrltoNameMapping } from "@/lib/data";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";

export default function Page() {
  const { product } = useParams();
  const path = usePathname();
  const productType = path.split("/")[2];

  const productName =
    productUrltoNameMapping[product as keyof typeof productUrltoNameMapping];

  const productObj = productData[productType as keyof typeof productData].find(
    (item) => item.name === productName
  );

  if (!productObj) {
    return (
      <div className="p-8 text-center text-red-500 animate-pulse">Product not found</div>
    );
  }

  const InfoCard = ({ title, value }: { title: string; value: string }) => (
    <div className="bg-white rounded-2xl p-6 shadow-lg transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-50">
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
      <p className="mt-2 text-gray-600">{value}</p>
    </div>
  );

  const KeyValueTable = ({
    title,
    data,
    className
  }: {
    title: string;
    data: Record<string, string | undefined>;
    className?: string;
  }) => (
    <section className={cn("bg-white p-6 rounded-2xl shadow-lg mb-12 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-50", className)}>
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <table className="w-full table-auto text-gray-700">
        <tbody>
          {Object.entries(data).map(([key, value]) => (
            <tr key={key} className="border-b border-gray-200">
              <td className="py-2 pr-4 text-gray-700 capitalize">{key.replace(/([A-Z])/g, " $1")}</td>
              <td className="py-2 text-gray-600">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );

  const BulletList = ({ title, items }: { title: string; items: string[] }) => (
    <section className="bg-white p-6 rounded-2xl shadow-lg mb-12 transition-all transform hover:scale-105 hover:shadow-xl hover:bg-gray-50">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
      <ul className="space-y-3 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <span className="mt-1 w-3 h-3 rounded-full bg-blue-400"></span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );

  return (
    <main className="bg-gray-50 min-h-screen text-gray-900 py-10 px-6 font-heading">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <section className="text-center mb-12 animate-fade-in">
          <h1 className=" text-3xl lg:text-5xl font-bold text-gray-900">{productObj.name}</h1>
          <p className="text-xl text-gray-600 mt-2">{productObj.scientificName}</p>
          <div className="w-16 h-1 bg-blue-500 mx-auto mt-4 rounded-full"></div>
        </section>

        {/* Info Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <InfoCard title="Packaging" value={productObj.packaging} />
          <InfoCard title="Shelf Life" value={productObj.shelfLife} />
          <InfoCard title="Origin" value={productObj.origin} />
          <InfoCard title="Availability" value={productObj.availability} />
          <InfoCard title="HS Code" value={productObj.hsCode} />
        </section>

        {/* Key Value Tables */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-x-8">
          <KeyValueTable className="col-span-2" title="Nutrition Facts" data={productObj.nutritionFacts} />
          <KeyValueTable className="col-span-2 lg:col-span-1" title="Vitamins" data={productObj.vitamins} />
          <KeyValueTable className="col-span-2 lg:col-span-1" title="Minerals" data={productObj.minerals} />
        </div>

        {/* Bullet Lists */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
          <BulletList title="Health Benefits" items={productObj.healthBenefits} />
          <BulletList title="Uses" items={productObj.uses} />
        </div>

        {/* CTA Button (Uncommented for style) */}
        {/* <div className="flex justify-center mt-16">
          <button className="bg-blue-500 text-white text-lg px-8 py-3 rounded-full hover:scale-105 hover:shadow-xl transition-all duration-300">
            Contact Us
          </button>
        </div> */}
      </div>
    </main>
  );
}
