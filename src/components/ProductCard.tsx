import { useState } from "react";
import Button from "./Button";

const ProductCard = ({
  images,
  brand,
  title,
  price,
}: {
  images: string[];
  brand: string;
  title: string;
  price: string;
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  return (
    <div className="flex flex-col px-6 py-2 border border-primary rounded-xl shadow-md w-[250px]">
      <div className="w-full mb-3">
        <img
          src={
            process.env.REACT_APP_BASE_URL +
            "uploads/" +
            images[selectedImageIndex]
          }
          alt="Product 1"
          width={175}
          height={175}
          className="m-auto w-[175px] h-[175px] object-cover"
        />
        <div
          className={`flex mt-2 h-[40px] ${
            images.length < 4 && "justify-center"
          } overflow-x-auto w-full`}
        >
          {images.map((img, index) => (
            <img
              key={index}
              onClick={() => {
                setSelectedImageIndex(index);
              }}
              width={40}
              src={process.env.REACT_APP_BASE_URL + "uploads/" + img}
              className={`border-b-2 w-[40px] h-[39px] object-cover ${
                selectedImageIndex == index ? "border-primary" : ""
              }`}
            />
          ))}
        </div>
      </div>
      <div className="text-gray-700 text-md mb-2">{brand}</div>
      <div className=" text-md font-bold mb-2">{title}</div>
      <div className="text-md font-semibold text-gray-800 mb-4">{price}</div>
      <Button className="rounded-md " title="Edit Product" onClick={() => {}} />
    </div>
  );
};

export default ProductCard;
