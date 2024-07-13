"use client";
import CreateCard from "./createcard";

export default function ReviewForm() {
  return (
    <>
      <div className="bg-slate-300">
        <h1 className="p-4 text-6xl font-bold text-gray-700">Review</h1>
        <CreateCard />
        <div className="flex max-w-screen-md p-4 m-4">
          <button
            type="submit"
            className="bg-white text-slate hover:bg-gray-200 font-bold py-2 px-4 rounded"
          >
            レビューを追加
          </button>
        </div>
      </div>
    </>
  );
}
