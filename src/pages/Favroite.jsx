import { useRecipe } from "../context/RecipeContext";
import RecipeTemplate from "../components/RecipeTemplate";

const Favroite = () => {
  const { favroite } = useRecipe();
  console.log(favroite);

  return (
    <div className="p-5 mt-10 flex flex-wrap gap-6 justify-center">
      {favroite.length > 0 ? (
        favroite.map((recipe) => (
          <RecipeTemplate key={recipe.id} recipe={recipe} />
        ))
      ) : (
        <p className="text-gray-500 text-xl">No favorite recipes found!</p>
      )}
    </div>
  );
};

export default Favroite;
