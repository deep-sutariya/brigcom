"use client";

import { useState } from "react";
import { FooterData } from "@/lib/data";
import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "India (+91)",
    phone: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, country, phone, company, message } = formData;

    const html = `
      <h3>New Request</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${country} ${phone}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    const data = {
      to: email,
      subject: "Brigcom Query",
      html: html,
      text: "From website contact page",
    };

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status == 200) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          country: "India (+91)",
          phone: "",
          company: "",
          message: "",
        });
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="w-full h-[260px] md:h-[320px] relative overflow-hidden shadow-lg">
        <img
          src="background/contact.jpg"
          alt="Contact Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute z-30 inset-0 bg-black/40 flex flex-col justify-center px-6 md:px-48 text-white ">
          <h1 className=" text-4xl md:text-5xl font-main font-extrabold mb-4 text-blue-50/90 ">
            Contact Us
          </h1>
          <div className=" text-sm md:text-base font-main text-blue-50 font-semibold flex gap-x-2 md:gap-x-3">
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
          <form className="space-y-5" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                className="border px-4 py-2 rounded w-full"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className="border px-4 py-2 rounded w-full"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <select
                name="country"
                value={formData.country}
                onChange={handleChange}
                className="border px-4 py-2 rounded w-full"
              >
                <option>India (+91)</option>
                <option>USA (+1)</option>
                <option>UK (+44)</option>
              </select>
              <input
                name="phone"
                type="tel"
                placeholder="Mobile Number *"
                value={formData.phone}
                onChange={handleChange}
                className="border px-4 py-2 rounded w-full"
                required
              />
            </div>
            <input
              name="company"
              type="text"
              placeholder="Company Name *"
              value={formData.company}
              onChange={handleChange}
              className="border px-4 py-2 rounded w-full"
              required
            />
            <textarea
              name="message"
              placeholder="Message *"
              value={formData.message}
              onChange={handleChange}
              className="border px-4 py-2 rounded w-full h-24 resize-none"
              required
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
