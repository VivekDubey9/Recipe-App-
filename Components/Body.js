import React, { useContext, useEffect, useState } from "react";

import Shimmer from "./Shimmer.js";
import RecipeCard from "./RecipeCard.js";

import { enhancedCard } from "./RecipeCard.js";
import AuthContext from "./AuthContext.js";

function filterjob(searchText, recipes) {
  const data = recipes.filter((recipe) => {
    return recipe?.strMeal?.toLowerCase().includes(searchText.toLowerCase());
  });

  return data;
}

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  const [alphabet, setAlphabet] = useState("");

  const p = "p";
  const CardWithTagFeature = enhancedCard(RecipeCard);

  //console.log(useState());
  useEffect(() => {
    getjoblist();
  }, [alphabet]);
  // console.log(recipe);
  async function getjoblist() {
    const data = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${
        alphabet && true ? alphabet : p
      }`
    );
    const jsn = await data.json();
    setRecipes(jsn.meals);
    setFilteredRecipes(jsn.meals);
    //console.log(jsn.meals);
  }

  const info = useContext(AuthContext);
  return filteredRecipes.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="m-4 p-4 flex items-center justify-center ">
        <p className="m-1 -rotate-12 mr-60  p-1  border-2 rounded-lg bg-green-400">
          {info.username}
        </p>
        <input
          className=" border-grey m-3  p-3 border-2 rounded-lg"
          type="text"
          placeholder="enter something to search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="flex items-center mr-[280px] px-4 py-3 text-white bg-blue-500 hover:bg-blue-400 rounded-lg"
          onClick={() => {
            const data = filterjob(searchText, recipes);
            setFilteredRecipes(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex relative flex-wrap  justify-center m-4 p-4">
        <input
          className=" absolute left-1 border-grey m-4 p-2 w-11 h-10 border-2 rounded-lg"
          type="text"
          placeholder="a-z"
          value={alphabet}
          onChange={(e) => setAlphabet(e.target.value)}
        />
        {filteredRecipes.map((recipe) =>
          recipe.strTags === null ? (
            <RecipeCard {...recipe} />
          ) : (
            <CardWithTagFeature {...recipe} />
          )
        )}
      </div>
    </>
  );
};

export default Body;
