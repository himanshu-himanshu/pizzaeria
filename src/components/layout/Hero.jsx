import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-bold">
          Everything
          <br /> is better
          <br /> with a <span className="text-primary"> Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis
          nam tempore laboriosam modi quo, a cumque aut accusamus cum vitae
          officiis.
        </p>
        <div className="flex gap-5">
          <button className="bg-primary uppercase text-sm text-white px-8 py-3 rounded-full">
            Order Now &rarr;
          </button>
          <button>Learn More</button>
        </div>
      </div>

      <div className="relative">
        <Image
          src={"/pizza.png"}
          alt="Pizza"
          layout="fill"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Hero;
