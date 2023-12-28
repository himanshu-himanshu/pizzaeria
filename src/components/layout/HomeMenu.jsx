import React from "react";

const HomeMenu = () => {
  return (
    <div>
      <div className="text-center">
        <h3 className="uppercase text-gray-600 font-semibol leading-4">
          Check Out
        </h3>
        <h2 className="text-primary font-bold text-4xl">Menu</h2>
      </div>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-300 p-4 rounded-lg text-center">
          <img src="/pizza.png" alt="Pizza" />
          <h4 className="font-semibold my-3">Pepperoni Pizza</h4>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            sit dolorum eveniet.
          </p>
          <button className="bg-primary text-white rounded-full px-6 py-2">
            Add to cart $12
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;
