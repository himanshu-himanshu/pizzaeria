import React from "react";

const SectionHeaders = ({ mainHeader, subHeader }) => {
  return (
    <>
      <h3 className="uppercase text-gray-600 font-semibol leading-4">
        {subHeader}
      </h3>
      <h2 className="text-primary font-bold text-4xl">{mainHeader}</h2>
    </>
  );
};

export default SectionHeaders;
