"use client";
import { useParams } from "next/navigation";

export default function Product() {
  const { product } = useParams();

  return (
    <div className=" justify-center items-center">
      Product: {product}
      <div></div>
    </div>
  );
}
