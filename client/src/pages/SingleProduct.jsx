import { useParams } from "react-router-dom";
import CategoryBar from "../components/CategoryBar";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../context/auth";

const SingleProduct = () => {
  const { category, name } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const { cookies } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get(`/category/${category}/${name}`)
      .then((res) => setProduct(res.data));
  }, [category, name]);

  const handleAddToCart = () => {
    setIsLoading(true);
    axios
      .post("/cart/add", {
        name: cookies.token,
        category: category,
        product: name,
        quantity: quantity,
      })
      .then(() => {
        setIsLoading(false);
        setQuantity(1);
        window.location.reload();
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };

  const handleMinus = () => {
    quantity <= 1 ? setQuantity(1) : setQuantity(quantity - 1);
  };

  return (
    <div className="font-kanit">
      <CategoryBar />
      <div className="flex w-full justify-center my-16">
        <div className="mx-5">
          <img
            className="rounded-xl"
            width={540}
            src={product.image_url}
            alt={product.id}
          />
          <div className="flex my-2 items-center justify-end">
            <div className="bg-red w-4 h-4 rounded-full mr-2"></div>
            <p>{product.calories} kcal.</p>
          </div>
        </div>
        <div className="mx-5 w-[30%]">
          <h1 className="font-extrabold text-3xl mb-2">{product.name}</h1>
          <p>{product.description}</p>
          <div className="flex items-center justify-between mt-9">
            <div className="flex items-center">
              <h1>จำนวน</h1>
              <button
                className="border px-2 mx-3 rounded-full"
                onClick={handleMinus}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                className="border px-2 mx-3 rounded-full"
                onClick={handlePlus}
              >
                +
              </button>
            </div>
            <button
              className="flex bg-red text-white px-4 py-2 rounded-md hover:shadow-md items-center justify-between w-[130px]"
              onClick={handleAddToCart}
              disabled={isLoading}
            >
              +
              <img
                src="../icon/cart-icon.png"
                className="w-5"
                alt="cart-icon"
              />
              <div className="border-l h-5"></div>
              {product.price} .-
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
