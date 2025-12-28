import React from "react";
import { useParams } from "react-router-dom";
import products from "./data";

const SingleComponent = () => {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2 className="text-center mt-20">Product not found</h2>;
  }

  return (
    <div className="mt-20 px-20">
      <div className="flex gap-10 bg-white p-10 rounded shadow-lg">

        {/* Image */}
        <div className="w-80 h-80 border rounded flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-72 h-72 object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <p className="text-gray-500 mt-2">{product.category}</p>

          <p className="mt-4 text-lg">
            Price: <span className="font-semibold">
              {product.price} Rs/{product.unit}
            </span>
          </p>

          {product.discount > 0 && (
            <p className="mt-2 text-green-600">
              {product.discount}% OFF available
            </p>
          )}

          <p className="mt-4 text-gray-700">
            {product.description}
          </p>

          <button
            disabled={!product.inStock}
            className={`mt-6 px-6 py-2 rounded
              ${
                product.inStock
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-gray-300 text-gray-600 cursor-not-allowed"
              }`}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleComponent;
