import CertificateCard from "@/components/CertificateCard";
import Link from "next/link";

export default function Certificates() {
  return (
    <main>
      <div className="w-full mx-auto">
        <div className="w-full h-[260px] md:h-[320px] relative overflow-hidden shadow-lg">
          <img
            src="background/certificate.jpg"
            alt="Certificate Banner"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute z-30 inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-48 text-white ">
            <h1 className=" text-4xl md:text-5xl font-heading font-extrabold mb-4 text-blue-50/90 ">
              Certificates
            </h1>
            <div className=" text-sm md:text-base font-heading text-blue-50 font-semibold flex gap-x-2 md:gap-x-3">
              <Link href="/">HOME</Link>
              <span>/</span>
              <h3 className=" uppercase">Certificates</h3>
            </div>
          </div>
        </div>
        <div className="w-fit mx-auto mt-14 sm:mt-20">
          <div className="font-main text-xl lg:text-3xl font-semibold text-gray-700">
            Certifications
          </div>
          <div className="mt-1 lg:mt-2 border-b-3 rounded-full max-w-[30%] mx-auto border-[#169EBE]"></div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-6 font-main text-justify text-xs md:text-base text-gray-400 py-4 px-5 md:px-28 lg:px-48 my-10 md:my-16">
        <div>
          At Brigcome, quality and safety come first. We understand that when it
          comes to food handling and export, maintaining the highest standards
          of hygiene, quality, and safety is not just important it's essential.
          That’s why at Brigcome, we strictly adhere to international food
          safety protocols and conduct rigorous quality checks at every stage of
          the process.
        </div>
        <div>
          We uphold strict hygiene, safety, and quality standards across every
          stage—from sourcing and handling to packaging and export. With
          accreditations from TPCI, APEDA, and other authorities, we ensure
          compliance with global food safety norms. As a government-certified
          exporter from India, we deliver products that meet international
          expectations.
        </div>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 px-5 md:px-28 lg:px-48 mt-16 md:mt-24 mb-20 md:mb-32">
        <CertificateCard
          imageUrl="/certificates/firstPage/Business_Terms.webp"
          link="/certificates/Business_Terms.pdf"
          title="Business Terms"
        />
        <CertificateCard
          imageUrl="/certificates/firstPage/FSSAI.webp"
          link="/certificates/FSSAI.pdf"
          title="FSSAI"
        />
        <CertificateCard
          imageUrl="/certificates/firstPage/GST.webp"
          link="/certificates/GST.pdf"
          title="GST"
        />
        <CertificateCard
          imageUrl="/certificates/firstPage/IEC.webp"
          link="/certificates/IEC.pdf"
          title="IEC"
        />
        <CertificateCard
          imageUrl="/certificates/firstPage/ISO.webp"
          link="/certificates/"
          title="ISO"
        />
        <CertificateCard
          imageUrl="/certificates/firstPage/Udyam.webp"
          link="/certificates/Udyam.pdf"
          title="Udyam"
        />
        <CertificateCard
          imageUrl="/certificates/firstPage/Registration_Cum_Membership.webp"
          link="/certificates/Registration_Cum_Membership.pdf"
          title="Registration Membership"
        />
      </div>
    </main>
  );
}
