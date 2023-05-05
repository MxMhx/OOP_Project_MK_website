import axios from "axios";
import React, { useState } from "react";

export default function AddCategoryForm() {
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAddCategory = (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .post("/addcategory", {
        name: name,
        imageUrl: imageUrl,
      })
      .then(() => {
        setName("");
        setImageUrl("");
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex justify-center m-5">
      <div className="w-1/2 bg-gray rounded-b-xl p-4">
        <form onSubmit={(e) => handleAddCategory(e)}>
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
            placeholder="Category Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button
            className="w-full px-4 py-2 mt-3 font-bold text-red bg-white rounded-lg border-red border-2"
            type="submit"
            disabled={isLoading}
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}
