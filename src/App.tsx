import React from "react";
import { TProduct } from "./types";
import { useState, useEffect } from "react";
import Product from "./components/Product";
import { FaShoppingCart } from "react-icons/fa";


const App = () => {
  const [products, setProducts] = useState<TProduct[]>([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data: TProduct[]) => setProducts(data));
  }, []);
  return (
    <div className="min-h-screen bg-bg text-text">
      <nav className="flex items-center justify-between bg-primary text-accent py-3 px-32">
        <h2 className="text-[25px] font-bold">StoreAPI</h2>
       <div className="flex items-center gap-x-3">
        <span className="bg-accent text-primary font-normal text-[12px] rounded-md px-2 py-1">Cart</span>
       <FaShoppingCart className="text-accent" />
       </div>
      </nav>
      <div className="px-32 py-10 grid grid-flow-row grid-cols-4 gap-3">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              price={product.price}
              title={product.title}
              description={product.description}
              id={product.id}
              images={product.images}
              updatedAt={product.updatedAt}
              creationAt={product.creationAt}
              category={product.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
