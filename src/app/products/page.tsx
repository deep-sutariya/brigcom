import ProductCard from "@/components/ProductsCard";

export default function Home() {
  return (
    <main>
      <div className="w-fit mx-auto mt-14 sm:mt-20">
        <div className="font-main text-xl lg:text-3xl font-semibold text-gray-700">
          Our Product Range
        </div>
        <div className="mt-1 lg:mt-2 border-b-3 rounded-full max-w-[30%] mx-auto border-[#169EBE]"></div>
      </div>
      <div className="flex items-center justify-center gap-x-10 py-4 px-10 md:px-20 lg:px-28 my-20">
        <ProductCard imageUrl="/4.jpg" title="Ayurveda / Natural Herbs" link="/products/ayurvedaandherbs" className=" w-full md:w-2/6" />
        {/* <ProductCard imageUrl="/4.jpg" title="Oil Seeds" link="/products/oilseeds" /> */}
        {/* <ProductCard imageUrl="/4.jpg" title="Spices" link="/products/spices" /> */}
        {/* <ProductCard imageUrl="/4.jpg" title="Frozen & IQF" link="/" /> */}
      </div>  
    </main>
  );
}
