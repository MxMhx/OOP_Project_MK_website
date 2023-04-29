import { useNavigate } from "react-router-dom";
export default function ProductCard(props) {
  const navigator = useNavigate();
  const handleSubmit = (product) => {
    navigator(`/${props.category}/${product.name}`);
  };
  return (
    <div
      className="flex flex-col items-center bg-white m-3 cursor-pointer"
      onClick={() => handleSubmit(props.product)}
    >
      <img
        src={props.product.image_url}
        alt={props.product.id}
        className="rounded-lg"
      />
      <div className="flex justify-between w-full my-2">
        <h1 className="pt-4">{props.product.name}</h1>
        <button className="flex bg-red text-white px-4 py-2 rounded-md hover:shadow-md items-center justify-between w-[130px]">
          +
          <img src="./icon/cart-icon.png" className="w-5" alt="cart-icon" />
          <div className="border-l h-5"></div>
          {props.product.price} .-
        </button>
      </div>
    </div>
  );
}
