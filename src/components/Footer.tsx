import { FooterData } from "@/lib/data";
import FooterItems from "./FooterItems";

export default function Footer() {
  return (
    <div className=" min-w-full flex flex-col">
      <div className=" flex flex-col gap-y-12 sm:grid sm:grid-cols-2 sm:grid-rows-2 sm:gap-y-16 lg:grid-cols-4 lg:grid-rows-1 py-12 px-5 sm:pt-14 lg:py-16 md:px-24 xl:px-48 bg-[#353535]">
        <FooterItems heading="Information" details={FooterData.Information} />
        <FooterItems heading="Products" details={FooterData.Products} />
        <FooterItems heading="Branches" details={FooterData.Branches} />
        <FooterItems heading="Stay Connected" contact={FooterData.Contact} />
      </div>

      <div className="w-full text-xs md:text-sm font-main tracking-wider px-5 py-5 flex gap-x-1 items-center justify-center text-center text-gray-300/70 bg-[#252525]">
        <h1>Copyright © 2025 <span className=" underline">Brigcom®</span></h1>
        <h1 className="mx-1 sm:mx-2">|</h1>
        <h1 className="">All rights reserved.</h1>
      </div>
    </div>
  );
}
