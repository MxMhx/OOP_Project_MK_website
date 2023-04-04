import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { productData } from "../static/data";
import CategoryBar from "../components/CategoryBar";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/Filter";

const Category = () => {
  const { category } = useParams();
  const productfilter = productData.filter(
    (product) => product.category === category
  );

  useEffect(() => {
    fetch("http://127.0.0.1:8000/${category}")
      .then((response) => response.json())
      .then((data) => console.log(data));
  });

  return (
    <div className="font-kanit">
      <CategoryBar category={category} />
      <FilterBar title={category} />
      <div className="flex justify-center mt-5">
        <div className="grid grid-cols-3 w-4/6">
          {productfilter.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
