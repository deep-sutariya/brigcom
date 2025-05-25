import ProductCard from "@/components/ProductsCard";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="w-full mx-auto">
        <div className="w-full h-[320px] relative overflow-hidden shadow-lg">
          <img
            src="background/product.jpg"
            alt="Products Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute z-30 inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-48 text-white ">
            <h1 className=" text-4xl md:text-5xl font-heading font-extrabold mb-4 text-blue-50/90 ">
              Our Product Range
            </h1>
            <div className=" text-sm md:text-base font-heading text-blue-50 font-semibold flex gap-x-2 md:gap-x-3">
              <Link href="/">HOME</Link>
              <span>/</span>
              <h3 className=" uppercase">Product Range</h3>
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto mt-14 sm:mt-20">
          <div className="font-main text-xl lg:text-3xl font-semibold text-gray-700">
            Our Product Range
          </div>
          <div className="mt-1 lg:mt-2 border-b-3 rounded-full max-w-[30%] mx-auto border-[#169EBE]"></div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-x-10 py-4 px-10 md:px-20 lg:px-28 my-20">
        <ProductCard
          imageUrl="/4.jpg"
          title="Ayurveda / Natural Herbs"
          link="/products/ayurvedaandherbs"
          className=" w-full md:w-2/6"
          type="productType"
        />
        {/* <ProductCard imageUrl="/4.jpg" title="Oil Seeds" link="/products/oilseeds" /> */}
        <ProductCard
          imageUrl="/4.jpg"
          title="Spices"
          link="/products/spices"
          className=" w-full md:w-2/6"
          type="productType"
        />
        {/* <ProductCard imageUrl="/4.jpg" title="Frozen & IQF" link="/" /> */}
      </div>
    </main>
  );
}
