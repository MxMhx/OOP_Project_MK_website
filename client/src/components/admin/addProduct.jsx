import React from "react";

export default function AddProductForm() {
  return (
    <div className="flex justify-center m-5">
      <div className="w-1/2 bg-gray rounded-b-xl p-4">
        <form>
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="text"
            placeholder="Category Name"
          />
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="text"
            placeholder="Product Name"
          />
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="url"
            placeholder="Image URL"
          />
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="number"
            placeholder="Price"
          />
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="text"
            placeholder="description"
          />
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="text"
            placeholder="calories"
          />
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="text"
            placeholder="type Ex. ชุด 4 คน"
          />
          <button
            className="w-full px-4 py-2 mt-3 font-bold text-red bg-white rounded-lg border-red border-2"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
