"use client";

import React, { useEffect, useState } from "react";
import ProductsTabBar from "./ProductsTabBar";
import { productType } from "@/constants";
import { client } from "@/sanity/lib/client";

const ProductGrid = () => {
  //  const [products, setProducts] = useState<PRODUCTS_QUERYResult>([]);
  const [loading, setLoading] = useState(false);
  const [selectedTab, setSelectedTab] = useState(productType[0]?.title || "");
  const query = `*[_type == "product" && variant == $variant] | order(name asc)`;
  const params = { variant: selectedTab.toLowerCase() };
  // console.log(selectedTab);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        console.log(await response);
      } catch (error) {
        console.log("Product fetching Error", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [selectedTab]);

  return (
    <div className="mt-10 flex flex-col items-center">
      <ProductsTabBar selectedTab={selectedTab} onTabSelect={setSelectedTab} />
    </div>
  );
};

export default ProductGrid;
