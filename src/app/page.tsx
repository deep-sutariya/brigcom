import ImageSlider from "@/components/ImageSideBar";
import { PopularProductsSlider } from "@/components/PopularProductsSlider";
import ProductCard from "@/components/ProductsCard";

export default function Home() {
  return (
    <div>
      <ImageSlider />
      <div className=" w-11/12 md:w-5/6 mx-auto my-14 sm:my-32 flex flex-col justify-center items-center gap-y-16">
        <div className="w-fit mx-auto ">
          <div className="font-main text-lg lg:text-3xl font-semibold text-gray-700 text-center">
            Brigcom - Global Food Importers & Exporters
          </div>
          <div className="mt-2 lg:mt-3 border-b-3 rounded-full max-w-[20%] mx-auto border-[#169EBE]"></div>
        </div>
        <div className="">
          <p className=" text-xs md:text-base font-main tracking-wider text-gray-500 md:px-6">
            "As a trusted name in global trade, Brigcom is committed to
            delivering the finest quality Indian products to international
            markets. With a deep-rooted understanding of sourcing, logistics,
            and compliance, we specialize in connecting India's rich
            agricultural and nutraceutical heritage with the world. Whether it's
            herbs, spices, or wellness supplements, Brigcom ensures seamless
            exports backed by strict quality assurance and timely delivery. Our
            goal is to help your business access premium Indian products while
            meeting global standards, efficiently and reliably."
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-14 sm:mt-20 py-16 flex flex-col justify-center items-center gap-y-16 bg-[#90e6f9]/15">
        <div className=" w-fit mx-auto ">
          <div className="font-main text-lg lg:text-3xl font-semibold text-gray-700">
            Popular Products
          </div>
          <div className=" mt-2 border-b-3 rounded-full max-w-[20%] mx-auto border-[#169EBE]"></div>
        </div>
        <div className="">
          <PopularProductsSlider />
        </div>
      </div>

      <section className="relative py-12 md:py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className=" w-fit mx-auto mb-12 sm:mb-20 lg:mb-24">
          <div className="font-main text-lg lg:text-3xl font-semibold text-gray-700">
            Why the Indian market is Best?
          </div>
          <div className="mt-2 lg:mt-3 border-b-3 rounded-full max-w-[20%] mx-auto border-[#169EBE]"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-10 relative z-10 ">
          {[
            {
              title: "Rooted in Farming Power",
              description:
                "With half the nation rocking the fields, India's got agriculture in its DNA and it shows in every export.",
            },
            {
              title: "Pocket-Friendly, Quality-Heavy",
              description:
                "Thanks to low-cost labor and easy-access raw stuff, India delivers premium food goodies that won't burn your wallet.",
            },
            {
              title: "Taste-Tested & Approved",
              description:
                "Before anything ships out, it goes through quality rituals and checklists to make sure it's top-notch every single time.",
            },
            {
              title: "Spice Game: Legendary",
              description:
                "From tangy to tongue-tingling, India's spice stash is unmatched a flavor playground for global palates.",
            },
            {
              title: "Cultural Masala Mix",
              description:
                "Every corner of India brings its own flair one country, hundreds of food stories, and flavor bombs in every bite.",
            },
            {
              title: "Tech-Savvy Traditions",
              description:
                "Farming meets futuristic with innovation in its pocket, India keeps global trade smooth, smart, and spicy.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`py-3 px-5 md:py-6 md:px-8 rounded-lg bg-white shadow hover:shadow-lg transition-all duration-500 ease-in-out border-2 border-dashed hover:border-dotted border-[#169EBE]`}
            >
              <div className="relative z-10 font-heading">
                <h3 className="sm:text-lg lg:text-xl font-semibold text-gray-600 mb-1 sm:mb-3 font-main tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-500 leading-relaxed font-details text-xs sm:text-base tracking-tight sm:tracking-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="relative mx-auto py-12 md:py-20 flex flex-col justify-center items-center gap-y-12 md:gap-y-16 bg-[#90e6f9]/15">
        <div className=" w-fit mx-auto ">
          <div className="font-main text-lg lg:text-3xl font-semibold text-gray-700">
            Our Product Range
          </div>
          <div className="mt-2 lg:mt-3 border-b-3 rounded-full max-w-[20%] mx-auto border-[#169EBE]"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-10 md:px-20 lg:px-28 w-full">
          <ProductCard
            imageUrl="/background/herbs.jpg"
            title="Ayurveda / Natural Herbs"
            link="/products/ayurvedaandherbs"
            className=""
            type="productType"
          />
          <ProductCard
            imageUrl="/background/spices.jpg"
            title="Spices"
            link="/products/spices"
            className=""
            type="productType"
          />
          <ProductCard
            imageUrl="/background/ayurvedicandnutraceutical.jpg"
            title="Ayurvedic & Nutraceutical Supplements"
            link="/products/ayurvedicandnutraceutical"
            className=""
            type="productType"
          />
        </div>
      </div>
    </div>
  );
}
