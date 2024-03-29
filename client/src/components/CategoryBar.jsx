import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function CategoryBar(props) {
  const navigate = useNavigate();
  const [categorys, setCategorys] = useState();
  useEffect(() => {
    const getCategorys = async () => {
      const response = await axios.get("/category/");
      setCategorys(response.data);
    };
    getCategorys();
  }, []);

  const handleSubmit = (category) => {
    navigate(`/${category.name}`);
  };

  return (
    <div className="font-kanit">
      <div className="flex w-full justify-center relative">
        {categorys &&
          categorys.map((category, index) => {
            return (
              <div
                key={index}
                className="grid place-items-center px-10 py-2 cursor-pointer"
                style={{
                  backgroundColor:
                    props.category === category.name && "#EEEEEE",
                }}
                onClick={() => handleSubmit(category)}
              >
                <img src={category.image_url} width={60} alt="logo-category" />
                <h1 className="text-sm font-semibold text-darkgray">
                  {category.name}
                </h1>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default React.memo(CategoryBar);
