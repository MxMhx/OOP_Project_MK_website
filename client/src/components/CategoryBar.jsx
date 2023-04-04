import React from "react";
import { useNavigate } from "react-router-dom";
import { categoriesData } from "../static/data";

export default function CategoryBar(props) {
  const navigate = useNavigate();

  return (
    <div className="font-kanit">
      <div className="flex w-full justify-center relative">
        {categoriesData &&
          categoriesData.map((category, index) => {
            const handleSubmit = (category) => {
              navigate(`/${category.title}`);
            };
            return (
              <div
                key={index}
                className="grid place-items-center px-10 py-2"
                style={{
                  backgroundColor:
                    props.category === category.title && "#EEEEEE",
                }}
                onClick={() => handleSubmit(category)}
              >
                <img src={category.imageUrl} width={60} alt="logo-category" />
                <h1 className="text-sm font-semibold text-darkgray">
                  {category.title}
                </h1>
              </div>
            );
          })}
      </div>
    </div>
  );
}
