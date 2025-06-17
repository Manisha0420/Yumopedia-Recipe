import React from "react";
import { useNavigate, useParams } from "react-router";
import { useRecipe } from "../context/RecipeContext";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const SingleRecipe = () => {
  const navigate = useNavigate();
    const { data, setData, favroite, setfavroite } = useRecipe();
    console.log(favroite);
    const { id } = useParams();
    console.log(id);
    // const recipe = data.find((r) => r.id == id);
    console.log(data);
   const recipe = data?.find((r) => r.id === Number(id));


    // console.log(favroite?.find((r) => r.id == Number(id)));
    console.log(recipe);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: recipe.image,
      title: recipe.title,
      chef: recipe.chef,
      desc: recipe.desc,
      ingr: recipe.ingr,
      inst: recipe.inst,
    },
  });

  const SubmitHandler = (updatedRecipe) => {
    const i = data.findIndex((r) => r.id == id);
    // code to update recipe
    console.log(data[i]);
    const copydata = [...data];
    console.log(data);
    copydata[i] = { ...recipe, ...updatedRecipe };
    localStorage.setItem("recipes", JSON.stringify(copydata)); //page reload hone pe changes na ho   JSON.stringify isliye kiya gaya kyunki localStorage sirf strings store karta hai.
    setData(copydata);

    toast.success("recipe updated!");
    reset();
  };

  const DeleteHandler = () => {
    const filterData = data.filter((r) => r.id != id);
    setData(filterData);
    localStorage.setItem("recipes", JSON.stringify(filterData));
    toast.success("/recipes");
    navigate("/recipes");
  };

  const FavroiteHandler = () => {
    let copyfavroite = [...favroite];
    console.log(copyfavroite);
    copyfavroite.push(recipe);
    setfavroite(copyfavroite);
    localStorage.setItem("favroite", JSON.stringify(copyfavroite));
  };

  const UnFavroiteHandler = () => {
    const filteredfavroite = favroite.filter((f) => f.id != id);
    setfavroite(filteredfavroite);
    localStorage.setItem("favroite", JSON.stringify(filteredfavroite));
  };

  return recipe ? (
    <div className="mt-5 w-full h-screen overflow-auto flex  ">
    
      <div className="left w-[50vw]">
        <h1 className="text-5xl font-black">{recipe.title} </h1>
        <img className="h-[30vh] object-cover" src={recipe.image} alt="" />
        <small className=" font-black text-red-400">{recipe.chef}</small>

        {favroite?.find((r)=>r.id == recipe.id)? (
          <button
            onClick={UnFavroiteHandler}
            className="block mt-5 text-white bg-red-500 p-1 rounded"
          >
            Un-Favroite
          </button>
        ) : (
          <button
            onClick={FavroiteHandler}
            className="block mt-5 text-white bg-blue-500 p-1 rounded"
          >
            Favroite
          </button>
        )}
      </div>
      {/*  */}
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="text-xl mt-5 p-5 shadow w-1/2"
      >
        <input
          className="w-full mb-5 block border-b p-1 outline-0"
          {...register("image")}
          type="url"
          placeholder="Image url"
        />
        {errors.image ? (
          <p className="text-red-500 text-2xl"> Image is require</p>
        ) : (
          ""
        )}

        <input
          className="w-full mb-5 block border-b p-1 outline-0"
          {...register("title")}
          type="text"
          placeholder="Title"
        />
        <input
          className="w-full mb-5 block border-b p-1 outline-0"
          {...register("chef")}
          type="text"
          placeholder="Chef"
        />

        <textarea
          className="w-full mb-5 block border-b p-1 outline-0"
          {...register("desc")}
          placeholder="recipe description..."
        ></textarea>
        <textarea
          className="w-full mb-5 block border-b p-1 outline-0"
          {...register("ingr")}
          placeholder="recipe ingredients, seperated by comma"
        ></textarea>
        <textarea
          className="w-full mb-5 block border-b p-1 outline-0"
          {...register("inst")}
          placeholder="recipe instructions, seperated by comma"
        ></textarea>

        <select
          className="w-full mb-5 block border-b p-1 outline-0"
          {...register("category")}
        >
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="supper">Supper</option>
          <option value="dinner">Dinner</option>
        </select>

        <button type="submit" className="bg-green-400 px-4 py-2 rounded">
          Update Recipe
        </button>
        <button
          onClick={DeleteHandler}
          type="button"
          className="ml-5 bg-red-400 px-4 py-2 rounded"
        >
          Delete Recipe
        </button>
      </form>
      {/*  */}
    </div>
  ) : (
    "Loading"
  );
};

export default SingleRecipe;
