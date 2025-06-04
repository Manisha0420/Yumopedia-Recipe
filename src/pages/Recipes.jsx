import { Link } from "react-router";
import RecipeTemplate from "../components/RecipeTemplate";
import {  useRecipe } from "../context/RecipeContext";

const Recipes = () => {
    const { data } = useRecipe();

    const reciperender = data.map((recipe) => (
        <RecipeTemplate key={recipe.id} recipe={recipe} />
    ));
    return (
        <>
            <Link
                className="absolute right-[10%] bg-green-400 px-4 py-2 rounded"
                to="/recipes/create-recipe"
            >
                Create Recipe
            </Link>
            <div className="p-5 mt-10 flex flex-wrap">
                {data.length > 0 ? reciperender : "No recipe found!"}
            </div>
        </>
    );
};

export default Recipes;

