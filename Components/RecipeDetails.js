import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { addtofavs } from "../Utils/favSlice.js";
import { useDispatch } from "react-redux";

const RecipeCardDetails = ({ recipe }) => {
  if (!recipe || recipe.length === 0) {
    // Return some placeholder or loading content
    return (
      <>
        <div className="card-section">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </>
    );
  }
  console.log(recipe);
  const {
    idMeal,
    strMeal,
    strCategory,
    strArea,
    strInstructions,
    strMealThumb,
    strYoutube,
  } = recipe[0];

  const description = recipe[0]?.strInstructions || "";

  // Split the description into an array of sentences.
  const sentences = description.split(".");
 // console.log(sentences);

  //this is for fav recipe section...
  const dispatch = useDispatch();
  const handleAddFav = (item) => {
    dispatch(addtofavs(item)); //this is that payload which we do action in slice
  };
  return (
    <div className="flex justify-evenly flex-wrap m-2 p-2">
      <div className="  m-4 p-4  w-1/2    bg-gray-200 border-2 border-gray-100 shadow-md rounded-lg">
        <h4 className="font-bold">Ingredients Required</h4>
        <ul className="m-2 flex flex-wrap">
          {/* Render your list of ingredients here */}
          {Array.from({ length: 9 }, (_, index) => (
            <li
              className=" border-yellow-200 border-2 w-1/4 rounded-lg m-1 text-black p-2 bg-yellow-300 "
              key={index + 1}
            >
              {recipe[0]?.[`strIngredient${index + 1}`]}
            </li>
          ))}
        </ul>
        <h4 className="font-bold">Step-by-step Instructions</h4>
        <div className="recipe-details">
          {/* Render each sentence in a separate paragraph */}
          {sentences.map((sentence, index) => (
            <p className="m-1 p-1" key={index}>
              {sentence.length > 0
                ? index + 1
                : "Now your dish is ready wohoo!"}
              ~{sentence.trim()}
            </p>
          ))}
        </div>
        <div className="flex justify-center items-center">
          <h4 className="m-2">Like this recipe?</h4>
          <button
            className="mr-2 middle none center rounded-lg py-2 px-2 m-1 bg-green-500  font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={() => handleAddFav(recipe)}
          >
            Add to favourites
          </button>
        </div>
      </div>

      <div className=" flex flex-wrap flex-grow  m-3 p-4  w-72    bg-gray-200 border-2 border-gray-100 shadow-md rounded-lg">
        <div className="">
          <img
            className="border-1 mb-2 w-full h-[80%] rounded-lg "
            src={strMealThumb}
            alt="reloading..."
          />
          <h4 className="font-bold">{strMeal}</h4>
        </div>
        <div className="flex items-center w-full justify-between">
          <button className="mt-4 mr-2 p-2 text-white bg-blue-500 hover:bg-blue-400 rounded-lg">
            <a href={strYoutube} target="_blank">
              Watch Video
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

const RecipeDetails = () => {
  const params = useParams();
  const id = params.id;
  const [recipedetail, setRecipeDetail] = useState([]);

  useEffect(() => {
    getRecipeDetails();
  }, []);

  async function getRecipeDetails() {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setRecipeDetail(result.meals);
      //console.log(result.meals);
    } catch (error) {
      console.error("Error fetching recipe details:", error);
    }
  }
  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-center m-4 text-black font-bold text-4xl">
          Recipe details
        </h1>
      </div>

      <RecipeCardDetails recipe={recipedetail} />
    </div>
  );
};

// {    image , Instructions .....,

// }

export default RecipeDetails;
