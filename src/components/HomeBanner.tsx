import React from "react";
import Title from "./Title";

const HomeBanner = () => {
  return (
    <div className="flex flex-col items-center py-10">
      <Title className="text-3xl md:text-4xl uppercase font-bold text-center">
        Best Clothing Collection
      </Title>
      <p className="text-sm text-center font-medium max-w-[480px] mt-2 text-gray-600 leading-5">
        Discover the perfect blend of style and comfort with our latest arrivals. From everyday essentials to standout pieces — find your next favorite outfit here.
      </p>
    </div>
  );
};

export default HomeBanner;
