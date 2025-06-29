import React from "react";

const images = [
  "/certificates/homePage/APEDA.webp",
  "/certificates/homePage/fieo.png",
  "/certificates/homePage/FSSAI.jpg",
  "/certificates/homePage/ISO.jpg",
  "/certificates/homePage/MSME.png",
  "/certificates/homePage/SPICE_BOARD.jpg",
];

const CertificateSection = () => {
  return (
    <section className="relative py-12 md:py-20 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className=" w-fit mx-auto mb-12 sm:mb-20 lg:mb-24">
        <div className="font-main text-lg lg:text-3xl font-semibold text-gray-700">
          We Are Certified
        </div>
        <div className="mt-2 lg:mt-3 border-b-3 rounded-full max-w-[20%] mx-auto border-[#169EBE]"></div>
      </div>
      <div className=" grid grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
        {images.map((item, index) => {
          return (
            <div className=" mx-auto" key={index}>
              <img className="rounded-4xl w-65 h-55 object-contain" src={item} alt={item} />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CertificateSection;
