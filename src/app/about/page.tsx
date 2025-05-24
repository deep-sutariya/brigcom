import Link from "next/link";
import { VscDebugBreakpointDataUnverified } from "react-icons/vsc";

export default function AboutUs() {
  return (
    <main className="text-gray-800 ">
      <div className="w-full h-[320px] relative overflow-hidden shadow-lg">
        <img
          src="background/about.jpg"
          alt="About Us Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute z-30 inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-48 text-white ">
          <h1 className=" text-4xl md:text-5xl font-heading font-extrabold mb-4 text-blue-50/90 ">
            About Us
          </h1>
          <div className=" text-sm md:text-base font-heading text-blue-50 font-semibold flex gap-x-2 md:gap-x-3">
            <Link href="/">HOME</Link>
            <span>/</span>
            <h3 className=" uppercase">About Us</h3>
          </div>
        </div>
      </div>

      <section className=" w-full py-20 md:py-24 px-6 md:px-12 lg:px-36 text-center flex flex-col sm:flex-row gap-x-10 items-center justify-center">
        <div className="hidden sm:visible md:w-[50%] sm:flex justify-center items-center">
          <img
            className=" h-36 md:h-48 lg:h-72 object-contain"
            src="/8.jpg"
            alt="About us main"
          />
        </div>

        <div className=" sm:w-[70%] md:w-[50%]">
          <div className=" flex gap-x-2 text-2xl lg:text-4xl font-bold mb-8 sm:mb-6 text-gray-600 text-left">
            <h1>
              WELCOME TO{" "}
              <span className="tracking-wide text-[#169EBE]/90">BRIGCOM</span>
            </h1>
          </div>
          <div className=" flex flex-col gap-y-4 mx-auto leading-relaxed text-gray-500 text-left font-heading text-sm md:text-sm lg:text-base">
            <p>
              We specialise in sourcing and delivering premium-quality herbs,
              spices, and oilseeds from India, with an unwavering commitment to
              purity, traceability, and ethical sourcing. Backed by years of
              expertise and deep-rooted connections across India's agricultural
              heartlands, our mission goes beyond just supply.
            </p>
            <p>
              At Brigcom, we focus on consistency, transparency, and long-term
              relationships, ensuring that every shipment meets the highest
              global standards and every interaction reflects our dedication to
              trust and service.
            </p>
          </div>
        </div>
      </section>

      <section className=" pt-4 pb-12 sm:py-16 px-3 lg:px-12 xl:px-32  bg-[#9ee9fa] relative">
        <h2 className=" absolute top-8 lg:left-12 xl:left-32 text-3xl sm:text-5xl lg:text-7xl font-extrabold mb-10 text-center text-blue-100 uppercase font-stretch-110%">
          What We Offer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-10 mt-24 md:mt-20 lg:mt-28">
          {[
            {
              title: "Quantity with Consistent Supply",
              description:
                "Timely, stable deliveries for businesses requiring dependable volumes year-round.",
            },
            {
              title: "Strict Quality Control",
              description:
                "From farm-level selection to lab testing, hygienic processing, and compliant packaging.",
            },
            {
              title: "Transparent Sourcing",
              description:
                "Ethical sourcing with full traceability, direct from farmers and regional clusters.",
            },
            {
              title: "Customised Export Solutions",
              description:
                "Tailored packaging, documentation, labeling and certifications for diverse global needs.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`relative w-[90%] sm:w-full bg-gradient-to-tr from-white via-white to-gray-100 p-5 md:p-8 overflow-hidden hover:-translate-y-1 transition-all duration-500 animate-fade-up items-end sm:m-auto sm:rounded-xl ${
                idx % 2
                  ? "ml-auto rounded-b-2xl rounded-tr-2xl"
                  : "mr-auto rounded-t-2xl rounded-bl-2xl"
              }`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="absolute -top-15 lg:-top-10 -right-20 lg:-right-10 w-40 h-40 bg-[#169EBE]/10 rotate-45 rounded-2xl z-0 animate-spin-slow"></div>
              {idx % 2 ? (
                <div className="absolute top-2 -left-4 py-1 px-6 -rotate-45 bg-[#9ee9fa] z-0 sm:hidden"></div>
              ) : (
                <div className="absolute bottom-2 -right-4 py-1 px-6 -rotate-45 bg-[#9ee9fa] z-0 sm:hidden"></div>
              )}
              {/* {
                idx%2?
                <div className="absolute top-0 left-0 border-l-[20px] border-l-[#9ee9fa] border-b-[20px] border-b-transparent z-0"></div>
                :
                <div className="absolute bottom-0 right-0 border-r-[20px] border-r-[#9ee9fa] border-t-[20px] border-t-transparent z-0"></div>
              } */}

              <div className="relative z-10">
                <h3 className=" sm:text-xl lg:text-2xl font-semibold text-gray-700 mb-3 font-main tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-details text-sm sm:text-base tracking-tight sm:tracking-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-[#F5F2EF] py-12 md:py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBFA] via-[#F5F2EF] to-[#F2EFEB] opacity-40 z-0 animate-bg-gradient"></div>

        <h2 className="text-2xl lg:text-5xl font-main font-extrabold text-center text-gray-700 mb-14 md:mb-20 relative z-10 leading-tight tracking-wide animate-fadeIn">
          What Our Buyers Value
          <span className="block text-[#169EBE]/50 text-base md:text-lg font-details mt-3 tracking-normal">
            [ And We Deliver ]
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 relative z-10 ">
          {[
            "Product purity & food safety compliance",
            "Moisture-controlled, contamination-free packaging",
            "Clear and fast communication",
            "Professional handling and transparency",
            "Scalable orders – monthly or one-time",
            "Local sourcing knowledge bridging global demand",
          ].map((text, idx) => (
            <div
              key={idx}
              className={`
           p-5 md:p-8 rounded-lg bg-white shadow-xl hover:shadow-2xl 
          hover:scale-105 transition-all duration-500 ease-in-out
          animate-fadeInCard delay-[${idx * 200}ms]
        `}
            >
              <div className="absolute -top-3 -left-2 md:-left-3 md:-top-5 h-7 w-7 md:h-10 md:w-10 rounded-full transition-all duration-300 text-5xl md:text-7xl text-gray-500/50 font-details">
                "
              </div>
              <p className="text-gray-600 text-xs md:text-lg leading-relaxed tracking-wide font-details">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-12 md:py-20 px-6 md:px-12 lg:px-24 bg-[#3bbfdd] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#9ee9fa] to-[#9ef4fa] opacity-60 z-0 animate-bgGradient"></div>

        <div className="absolute top-[-10%] left-[-20%] w-[200px] h-[200px] bg-[#4feaf6] opacity-20 rounded-full animate-float1"></div>
        <div className="absolute bottom-[-5%] right-[-10%] w-[250px] h-[250px] bg-[#3bbfdd] opacity-30 rounded-full animate-float2"></div>

        <div className="max-w-4xl mx-auto text-left relative z-10">
          <h2 className="text-2xl md:text-5xl font-semibold mb-7 md:mb-10 animate-fadeInUp font-heading text-gray-50">
            Our Promise
          </h2>
          <div className=" flex gap-x-3 text-xs md:text-lg leading-relaxed mb-4 md:mb-6 animate-fadeInUp animate-delay-200 font-details">
            <div className=" pt-1">
              <VscDebugBreakpointDataUnverified width={300} height={300} />
            </div>
            <p>
              {`At Brigcom, trust isn't a strategy it's our foundation. We don't
            just supply products, we build long-term partnerships grounded in
            consistency, transparency, and responsiveness.`}
            </p>
          </div>
          <div className=" flex gap-x-3 text-xs md:text-lg leading-relaxed animate-fadeInUp animate-delay-400 font-details">
            <div className=" pt-1">
              <VscDebugBreakpointDataUnverified width={300} height={300} />
            </div>
            <p>
              {`Let us be your eyes and ears on the ground in India ensuring every
            deal is smooth, secure, and satisfying.`}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
