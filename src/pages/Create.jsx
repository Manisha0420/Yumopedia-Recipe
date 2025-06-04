import { nanoid } from 'nanoid'
import { useRecipe } from '../context/RecipeContext'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router';

const Create = () => {
  const navigate = useNavigate()
  const {data , setData} =useRecipe();
  const {register,handleSubmit,reset,formState:{errors} } = useForm();

  const SubmitHandler =(recipe)=>{
         recipe.id=nanoid();
         setData([...data,recipe]);
         toast.success("New Recipe Created!");
         reset();
         navigate(-1)
  }
   return (
    <div className="min-h-screen flex justify-center items-center  bg-[url(https://plus.unsplash.com/premium_photo-1663851786272-d4c555a5b8ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlY2lwZXMlMjB3YWxscGFlcnxlbnwwfHwwfHx8MA%3D%3D)] bg-center bg-cover bg-no-repeat p-9">
      <form
        onSubmit={handleSubmit(SubmitHandler)}
        className="w-full max-w-2xl bg-white shadow-lg p-10 rounded-lg space-y-6"
      >
        <h2 className="text-3xl font-bold text-center text-gray-800">Create Recipe</h2>

        <div>
          <label className="block font-semibold text-gray-700">Image URL</label>
          <input
            {...register('image', { required: 'Image URL is required' })}
            type="url"
            placeholder="Enter image URL"
            className={`w-full border p-2 rounded mt-1 ${
              errors.image ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Recipe Title</label>
          <input
            {...register('title', { required: 'Title is required' })}
            type="text"
            placeholder="Recipe title"
            className={`w-full border p-2 rounded mt-1 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
        </div>

    
        <div>
          <label className="block font-semibold text-gray-700">Chef Name</label>
          <input
            {...register('chef', { required: 'Chef name is required' })}
            type="text"
            placeholder="Chef name"
            className={`w-full border p-2 rounded mt-1 ${
              errors.chef ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.chef && <p className="text-red-500 text-sm">{errors.chef.message}</p>}
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Description</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            placeholder="Write recipe description here..."
            className={`w-full border p-2 rounded mt-1 h-24 resize-none ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            }`}
          ></textarea>
          {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Ingredients</label>
          <textarea
            {...register('ingredients', { required: 'Ingredients are required' })}
            placeholder="Separate ingredients with commas"
            className={`w-full border p-2 rounded mt-1 h-20 resize-none ${
              errors.ingredients ? 'border-red-500' : 'border-gray-300'
            }`}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients.message}</p>}
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Instructions</label>
          <textarea
            {...register('category', { required: 'Instructions are required' })}
            placeholder="Separate instructions with commas"
            className={`w-full border p-2 rounded mt-1 h-20 resize-none ${
              errors.category ? 'border-red-500' : 'border-gray-300'
            }`}
          ></textarea>
          {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}
        </div>

        <div>
          <label className="block font-semibold text-gray-700">Recipe Category</label>
          <select
            {...register('selectCategory', { required: 'Please select a category' })}
            className={`w-full border p-2 rounded mt-1 ${
              errors.selectCategory ? 'border-red-500' : 'border-gray-300'
            }`}
            defaultValue=""
          >
            <option value="" disabled>
              Select a category
            </option>
            <option value="cat-1">Lunch</option>
            <option value="cat-2">Super</option>
            <option value="cat-3">Dinner</option>
            <option value="cat-4">Breakfast</option>
          </select>
          {errors.selectCategory && (
            <p className="text-red-500 text-sm">{errors.selectCategory.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-green-400 text-white p-3 rounded font-semibold hover:bg-green-600 transition"
        >
          Save Recipe
        </button>
      </form>
    </div>
  )
}

export default Create
