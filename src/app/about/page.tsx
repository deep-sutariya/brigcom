export default function AboutUs() {
  return (
    <main className="text-gray-800 ">
      <section className=" py-24 px-6 md:px-12 lg:px-36 text-center flex gap-x-10 items-center justify-center">
        <div className="flex-[0.5] w-full flex justify-center items-center">
          <img
            className="h-72 object-contain"
            src="/8.jpg"
            alt="About us main"
          />
        </div>

        <div className="flex-[0.5]">
          <h1 className="text-4xl font-bold mb-6 text-gray-700 text-left">
            WELCOME TO BRIGCOM
          </h1>
          <p className="max-w-2xl mx-auto text-base leading-relaxed text-gray-600 text-left font-details">
            We specialise in sourcing and delivering premium-quality herbs,
            spices, and oilseeds from India, with an unwavering commitment to
            purity, traceability, and ethical sourcing. Backed by years of
            expertise and deep-rooted connections across India's agricultural
            heartlands, our mission goes beyond just supply. At Brigcom, we
            focus on consistency, transparency, and long-term relationships,
            ensuring that every shipment meets the highest global standards and
            every interaction reflects our dedication to trust and service.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-12 lg:px-32 bg-gradient-to-tl from-[#9ee9fa] to-[#9de8f9] relative">
        <h2 className=" absolute top-8 left-32 text-7xl font-extrabold mb-10 text-center text-blue-100 uppercase font-stretch-110%">
          What We Offer?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-28">
          {[
            {
              title: "Bulk Quantities with Consistent Supply",
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
                "Tailored packaging, labeling, documentation, and certifications for diverse global needs.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`relative group bg-gradient-to-tr from-white via-white to-gray-50 p-8 rounded-2xl overflow-hidden shadow-xl border border-gray-200 hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 animate-fade-up`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#169EBE]/10 rotate-45 rounded-2xl z-0 animate-spin-slow"></div>

              <div className="relative z-10">
                <h3 className="text-2xl font-semibold text-gray-700 mb-3 font-main">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-details">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="relative bg-[#F5F2EF] py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FDFBFA] via-[#F5F2EF] to-[#F2EFEB] opacity-40 z-0 animate-bg-gradient"></div>

        <h2 className="text-4xl md:text-5xl font-main font-extrabold text-center text-gray-700 mb-20 relative z-10 leading-tight tracking-wide animate-fadeIn">
          What Our Buyers Value
          <span className="block text-[#169EBE] text-lg font-details font-light mt-3 tracking-normal">
            ( And We Deliver )
          </span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 relative z-10 ">
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
           p-8 rounded-xl bg-white shadow-xl hover:shadow-2xl 
          hover:scale-105 transition-all duration-500 ease-in-out
          animate-fadeInCard delay-[${idx * 200}ms]
        `}
            >
              <div className="absolute -left-3 -top-5 h-10 w-10 rounded-full transition-all duration-300 text-7xl text-gray-500 font-details">
                "
              </div>
              <p className="text-gray-800 text-lg leading-relaxed tracking-wide font-details">
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative py-20 px-6 md:px-12 lg:px-24 bg-[#3bbfdd] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#3bbfdd] to-[#9ef4fa] opacity-60 z-0 animate-bgGradient"></div>

        <div className="absolute top-[-10%] left-[-20%] w-[200px] h-[200px] bg-[#9ef4fa] opacity-20 rounded-full animate-float1"></div>
        <div className="absolute bottom-[-5%] right-[-10%] w-[250px] h-[250px] bg-[#3bbfdd] opacity-30 rounded-full animate-float2"></div>

        <div className="max-w-4xl mx-auto text-left relative z-10">
          <h2 className="text-4xl md:text-5xl font-semibold mb-10 animate-fadeInUp font-heading">
            Our Promise
          </h2>
          <p className="text-lg leading-relaxed mb-6 animate-fadeInUp animate-delay-200 font-details">
            {`=> At Brigcom, trust isn’t a strategy — it’s our foundation. We don’t
            just supply products; we build long-term partnerships grounded in
            consistency, transparency, and responsiveness.`}
          </p>
          <p className="text-lg leading-relaxed animate-fadeInUp animate-delay-400 font-details">
            {`=> Let us be your eyes and ears on the ground in India — ensuring every
            deal is smooth, secure, and satisfying.`}
          </p>
        </div>
      </section>
    </main>
  );
}
