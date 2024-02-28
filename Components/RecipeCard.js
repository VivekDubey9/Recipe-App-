import React from "react";
import { Link } from "react-router-dom";
const RecipeCard = (props) => {
  //console.log(props);
  return (
    <div className=" flex flex-wrap m-4 p-4  w-[240px] h-80 flex-grow-0  bg-gray-200 border-2 border-gray-100 shadow-md rounded-lg">
      <div className="w-full h-[42%]">
        <img
          className="border-1 mb-2 w-full h-[80%] rounded-lg "
          src={props?.strMealThumb}
          alt="reloading..."
        />
        <h4 className="font-bold mb-6">{props.strMeal}</h4>
      </div>
      <div className="flex">
        <h5 className="mt-6">
          {props?.strCategory}, {props?.strArea}
        </h5>
      </div>

      <div className="">
        <p>Recipe:{props?.strInstructions?.substring(0, 60)}</p>
      </div>
      <div className="flex items-center justify-between mt-2 mb-2">
        <button className="middle none center rounded-lg bg-blue-500 py-1 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
          <a href={props?.strYoutube} target="_blank">
            Watch Video
          </a>
        </button>
        <Link to={`/recipe/${props?.idMeal}`}>
          {" "}
          {/* dynamic routing done here */}
          <button className="middle none center rounded-lg m-1 bg-blue-500 py-1 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
};

//higher order component...
export const enhancedCard = (RecipeCard) => {
  return (props) => {
    return (
      <>
        <div className="flex relative mb-4 h-80">
          <label className="h-5 w-[30%] absolute bg-green-400 text-white top-2 left-0 z-10 border-1 rounded-lg">
            😋 Try it!
          </label>
          <RecipeCard {...props} />
        </div>
      </>
    );
  };
};

export default RecipeCard;
