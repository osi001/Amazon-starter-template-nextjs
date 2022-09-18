import React, { useState } from "react";
import Image from "next/image";
import Currency from "react-currency-formatter";

const Product = ({ id, title, price, category, description, image }) => {
  const [min, max] = [0, 5];
  const [rating, setRating] = useState(
    Math.floor(Math.random() * (max - min + 1)) + min
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className=" relative flex flex-col m-5 bg-white z-30 p-10 rounded-md hover:bg-gray-50">
      <p className=" absolute top-2 right-2 text-xs italic text-gray-400">
        {" "}
        {category}{" "}
      </p>

      <Image src={image} height={200} width={200} objectFit="contain" />

      <h4>{title} </h4>

      <div className=" flex">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 text-yellow-500"
            >
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          ))}
      </div>

      <p className="text-xs line-clamp-2 my-2 ">{description} </p>

      <div className="mb-5">
        <Currency quantity={price} currency="USD" />
      </div>

      {hasPrime && (
        <div className="flex mt-2 space-x-2 items-center">
          <img
            src="/images/1200px-Amazon_Prime_Logo.svg.png"
            alt=""
            width={40}
          />
          <p className="text-xs text-gray-500">Free Next Day Delivery</p>
        </div>
      )}

      <button className="mt-auto button">Add to Basket</button>
    </div>
  );
};

export default Product;
