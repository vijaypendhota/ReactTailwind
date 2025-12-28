import React from "react";
import products from "./data";
import { Link } from "react-router-dom";

const ProductComponents = () => {
  return (
    <section className="text-gray-600 mt-20 ml-85 rounded bg-gray-100 w-340 body-font">
      <div className="text-2xl font-bold p-10">My Smart Basket</div>

      <div className="container px-5 py-1 mx-auto">
        <div className="flex flex-wrap gap-10 ml-5">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-70 p-4 bg-white rounded shadow-xl hover:shadow-2xl cursor-pointer relative"
            >
              {/* Discount Badge */}
              {product.discount > 0 && (
                <div className="absolute top-2 left-2 bg-green-900 text-white text-xs px-3 py-1 rounded-tl-2xl rounded-br-2xl">
                  {product.discount}% OFF
                </div>
              )}

              {/* Image */}
              <div className="w-50 h-50 rounded border border-gray-200 flex items-center justify-center mx-auto">
                <Link to={`/single-component/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-cover w-45 h-45"
                  />
                </Link>
              </div>

              {/* Details */}
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest mb-1">
                  {product.category}
                </h3>

                <h2 className="text-gray-900 text-lg font-medium">
                  {product.name}
                </h2>

                <p className="mt-1">
                  {product.price} Rs/{product.unit}
                </p>

                {/* Button */}
                <button
                  disabled={!product.inStock}
                  className={`border w-30 mt-2 rounded
                    ${
                      product.inStock
                        ? "border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
                        : "border-gray-300 text-gray-400 cursor-not-allowed"
                    }`}
                >
                  {product.inStock ? "Add" : "Out of Stock"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductComponents;
