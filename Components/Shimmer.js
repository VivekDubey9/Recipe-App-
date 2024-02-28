import React from "react";

const Shimmer = () => {
  return (
    <>
      <div className=" flex  justify-center items-center  m-4 p-4      bg-gray-200 border-2 border-gray-100 shadow-md rounded-lg">
        <input
          className=" border-grey m-4 p-3 border-2 rounded-lg"
          type="text"
          placeholder=""
          value=""
        />
        <button
          className="flex items-center px-4 py-3 text-white bg-blue-500 hover:bg-blue-400 rounded-lg"
          style={{ opacity: 0.3 }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap  justify-center m-4 p-4">
        <div className=" flex flex-wrap   m-4 p-4  w-72 h-[50vh]  bg-gray-200 border-2 border-gray-100 shadow-md rounded-lg"></div>
        <div className=" flex flex-wrap   m-4 p-4  w-72  h-[50vh]  bg-gray-200 border-2 border-gray-100 shadow-md rounded-lg"></div>
        <div className=" flex flex-wrap   m-4 p-4  w-72  h-[50vh]  bg-gray-200 border-2 border-gray-100 shadow-md rounded-lg"></div>
      </div>
    </>
  );
};

export default Shimmer;
