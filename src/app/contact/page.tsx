"use client";

import { FooterData } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full h-[260px] md:h-[320px] relative overflow-hidden shadow-lg">
        <img
          src="background/contact.jpg"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute z-30 inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-48 text-white ">
          <h1 className=" text-4xl md:text-5xl font-heading font-extrabold mb-4 text-blue-50/90 ">
            Contact Us
          </h1>
          <div className=" text-sm md:text-base font-heading text-blue-50 font-semibold flex gap-x-2 md:gap-x-3">
            <Link href="/">HOME</Link>
            <span>/</span>
            <h3>CONTACT</h3>
          </div>
        </div>
      </div>

      <div className="max-w-7xl w-full px-6 md:px-20 py-12 grid md:grid-cols-2 gap-14 md:gap-10 text-gray-800">
        <div>
          <h2 className="text-lg font-bold mb-6">REGISTERED ADDRESS:</h2>
          <div className="space-y-5 text-gray-700 font-details">
            <p className="flex items-start gap-2 max-w-sm">
              <MapPin className="w-10 h-8 text-[#169EBE]" />
              <Link href={FooterData.Contact[0].link}>
                {FooterData.Contact[0].detail}
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-[#169EBE]" />
              <Link href={FooterData.Contact[2].link}>
                {FooterData.Contact[2].detail}
              </Link>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-[#169EBE]" />
              <Link href={FooterData.Contact[1].link}>
                {FooterData.Contact[1].detail}
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold mb-5">CONNECT WITH US:</h2>
          <form className="space-y-5">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                className="border px-4 py-2 rounded w-full"
              />
              <input
                type="email"
                placeholder="Email *"
                className="border px-4 py-2 rounded w-full"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select className="border px-4 py-2 rounded w-full">
                <option>India (+91)</option>
                <option>USA (+1)</option>
                <option>UK (+44)</option>
              </select>
              <input
                type="tel"
                placeholder="Mobile Number *"
                className="border px-4 py-2 rounded w-full"
              />
            </div>
            <input
              type="text"
              placeholder="Company Name *"
              className="border px-4 py-2 rounded w-full"
            />
            <textarea
              placeholder="Message *"
              className="border px-4 py-2 rounded w-full h-24 resize-none"
            />
            <button
              type="submit"
              className="bg-[#169EBE] hover:bg-[#169EBE]/80 text-white px-6 py-2 rounded-lg shadow cursor-pointer w-1/2 font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
