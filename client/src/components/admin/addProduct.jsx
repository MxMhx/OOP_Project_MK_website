import axios from "axios";
import React, { useState } from "react";

export default function AddProductForm() {
  const [category, setCategory] = useState("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [type, setType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddProduct = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/addproduct", {
        category: category,
        name: name,
        imageUrl: imageUrl,
        price: price,
        description: description,
        calories: calories,
        type: type,
      })
      .then(() => {
        setIsLoading(false);
        setCategory("");
        setName("");
        setImageUrl("");
        setPrice(0);
        setDescription("");
        setCalories("");
        setType("");
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex justify-center m-5">
      <div className="w-1/2 bg-gray rounded-b-xl p-4">
        <form onSubmit={(e) => handleAddProduct(e)}>
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="text"
            placeholder="Category Name"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="url"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="text"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="text"
            placeholder="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="text"
            placeholder="calories"
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
          />
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="text"
            placeholder="type Ex. ชุด 4 คน"
            value={type}
            onChange={(e) => setType(e.target.value)}
          />
          <button
            className="w-full px-4 py-2 mt-3 font-bold text-red bg-white rounded-lg border-red border-2"
            type="submit"
            disabled={isLoading}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
