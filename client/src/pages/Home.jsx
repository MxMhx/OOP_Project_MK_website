import React, { useEffect, useState } from "react";
import axios from "axios";
import CategoryBar from "../components/CategoryBar";
import ProductCard from "../components/ProductCard";
import { Slide } from "react-slideshow-image";
import { slideImages } from "../static/data";
import "react-slideshow-image/dist/styles.css";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get("/category/โปรโมชั่น").then((res) => setProducts(res.data));
  }, []);

  const Slideshow = () => {
    const renderSlideImage = (slideImage, index) => {
      return (
        <div key={index}>
          <div className="items-center justify-center bg-cover hidden md:flex">
            <img
              src={slideImage.url}
              className="w-full"
              alt={slideImage.caption}
            />
          </div>
          <div className="flex items-center justify-center bg-cover md:hidden">
            <img
              src={slideImage.surl}
              className="w-full"
              alt={slideImage.caption}
            />
          </div>
        </div>
      );
    };

    return (
      <div className="slide-container">
        <Slide>{slideImages.map(renderSlideImage)}</Slide>
      </div>
    );
  };

  return (
    <div className="font-kanit">
      <CategoryBar />
      <Slideshow />
      <div className="flex flex-col items-center mt-10">
        <h1 className="flex items-center text-xl font-extrabold w-7/12">
          <img
            src="https://www.mk1642.com/getattachment/b4991225-a5e5-49b5-afe0-f7bf12af9316/Promotion.aspx"
            alt="promotion"
          />
          โปรโมชั่น
        </h1>
        <div className="flex justify-center mt-5 w-4/5">
          <div className="grid grid-cols-2">
            {products.map((product) => {
              return (
                <ProductCard
                  product={product}
                  category={"โปรโมชั่น"}
                  key={product.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Home);
