import ItemList from "./ItemList";
import React, { useState } from "react";

const ResturantMenuCategory = ({ data,title, showItems, setShowIndex }) => {
  // console.log(data);

  const handleClick = () => {
     setShowIndex();
  };

  return (
    <div className="mb-4">
      <div className="border-2 border-gray-300 w-11/12 rounded-xl p-4 shadow-2xl">
        <div
          className="flex justify-between h-16 items-center"
          onClick={handleClick}
        >
          <span className="font-bold text-3xl">
            {title?.title} ({data.length})
          </span>
          <span className="text-2xl">⬇️</span>
        </div>

        {/* {subCategory.map(
          (list) =>
            showItems && (
              <ItemList items={list.itemCards} />
            )
        )}  */}
          {showItems && (<ItemList items= {data} />)} 
      </div>
    </div>
  );
};

export default ResturantMenuCategory;
