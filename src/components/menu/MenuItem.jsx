import React from "react";

const MenuItem = () => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white duration-200 transition-all hover:shadow-lg">
      <div className="text-center">
        <img
          src="/pizza.png"
          alt="Pizza"
          className="max-h-auto max-h-48 block mx-auto"
        />
      </div>
      <h4 className="font-semibold my-3">Pepperoni Pizza</h4>
      <p className="text-gray-500 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas sit
        dolorum eveniet.
      </p>
      <button className="mt-4 bg-primary text-white rounded-full px-8 py-2">
        Add to cart $12
      </button>
    </div>
  );
};

export default MenuItem;
