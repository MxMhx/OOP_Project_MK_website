import React from "react";

export default function AddCategoryForm() {
  return (
    <div className="flex justify-center m-5">
      <div className="w-1/2 bg-gray rounded-b-xl p-4">
        <form>
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="url"
            placeholder="Image URL"
          />
          <input
            className="px-5 py-2 rounded-lg shadow-md w-full mb-5"
            type="text"
            placeholder="Category Name"
          />
          <button
            className="w-full px-4 py-2 mt-3 font-bold text-red bg-white rounded-lg border-red border-2"
            type="submit"
          >
            Add Category
          </button>
        </form>
      </div>
    </div>
  );
}
