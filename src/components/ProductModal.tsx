import React, { useEffect } from "react";
import { Button } from "./ui/button";
import { IoMdAdd } from "react-icons/io";

type Props = {
  image: string;
  description: string;
  title: string;
  price: number;
  closeModal: () => void;
};

const ProductModal = ({
  description,
  title,
  price,
  image,
  closeModal,
}: Props) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.title = title;

    return () => {
      document.body.style.overflow = "auto";
      document.title = "ShopApi";
    };
  }, []);

  return (
    <div className=" text-accent fixed inset-0 bg-black/50 flex justify-center items-center">
      <div className="flex gap-x-5 py-10 px-10 rounded-lg bg-primary max-w-[900px]">
        <img className="w-[300px] rounded-md" src={image} alt="" />
        <div className="flex flex-col gap-y-2">
          <span className="font-semibold text-[25px]">{title}</span>
          <p className="font-light">{description}</p>
          <div className="flex gap-x-5">
          <span className="bg-accent text-primary font-semibold py-1 px-5 rounded-md w-min whitespace-nowrap">
            Price: {price}
          </span>
          <Button variant={"ghost"}>Add to Cart <IoMdAdd /></Button>
          </div>
         <div className="">
         <Button className=" whitespace-nowrap" variant={"destructive"} onClick={closeModal}>
            Close
          </Button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
