import React from "react";

import { useDispatch } from "react-redux";
import { clearfavs, removefavs } from "../Utils/favSlice";
import { useSelector } from "react-redux";
import RecipeCard from "./RecipeCard";

const FavRecipes = () => {
  const dispatch = useDispatch();
  const handleClearFavs = () => {
    dispatch(clearfavs()); //this is that payload which we do action in slice
  };
  const handleRemoveFavs = () => {
    dispatch(removefavs()); //this is that payload which we do action in
  };
  const favItems = useSelector((store) => store.favs.items);
  console.log(favItems);

  return (
    <div className="">
      <div className="flex justify-center items-center m-8">
        <h4 className="m-2">Not Like these anymore?</h4>
        <button
          className="mr-2 middle none center rounded-lg py-2 px-2 m-1 bg-red-500  font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          onClick={() => handleClearFavs()}
        >
          Clear Your Favourites list
        </button>
      </div>
      <div className="flex items-center">
        {favItems.map((recipe) => (
          <>
            <RecipeCard {...recipe[0]} />
          </>
        ))}
      </div>
      <button
        className="mr-2 middle none center rounded-lg py-2 px-2 m-1 bg-red-500  font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        onClick={() => handleRemoveFavs()}
      >
        Remove from favourites
      </button>
    </div>
  );
};

export default FavRecipes;
