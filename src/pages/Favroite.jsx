import { useRecipe } from "../context/RecipeContext";
import RecipeTemplate from "../components/RecipeTemplate";

const Favroite = () => {
    const { favroite } = useRecipe();
    console.log(favroite);
    const reciperender = favroite.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
    ));
    return (
        <>
            <div className="p-5 mt-10 flex flex-wrap">
                {favroite.length > 0 ? reciperender : "No recipe found!"}
            </div>
        </>
    );
};

export default Favroite;
