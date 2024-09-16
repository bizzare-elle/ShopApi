import React, { useState } from "react";
import { TProduct } from "../types";
import { Button } from "./ui/button";
import ProductModal from "../components/ProductModal";
import { IoMdAdd } from "react-icons/io";

const Product = ({
  category,
  creationAt,
  description,
  id,
  images,
  price,
  title,
  updatedAt,
}: TProduct) => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="w-[300px] p-2 border-2 border-primary rounded-lg">
      <div>
        <img className="rounded-md" src={images[0]} alt="" />
        <div className="flex flex-col">
          <span className="font-bold">{title}</span>
          <span>Price: {price}</span>
          <div className="flex flex-row gap-x-2">
            <Button>
              Add to Cart <IoMdAdd></IoMdAdd>
            </Button>
            <Button variant={"secondary"} onClick={() => setShowModal(true)}>
              View
            </Button>
          </div>
          {showModal && (
            <ProductModal
              description={description}
              image={images[0]}
              title={title}
              price={price}
              closeModal={closeModal}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
