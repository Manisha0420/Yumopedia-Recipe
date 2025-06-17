import React, { createContext, useContext, useState } from 'react'
// 1. Context object banaya gaya
const recipeContext = createContext(null);
// 2. provider Context
const RecipeContext = (props) => {
  const [data , setData] = useState([
     {
      id: 1,
      title: "Classic Margherita Pizza",
      ingredients: [
        "Pizza dough",
        "Tomato sauce",
        "Fresh mozzarella cheese",
        "Fresh basil leaves",
        "Olive oil",
        "Salt and pepper to taste"
      ],
      instructions: [
        "Preheat the oven to 475°F (245°C).",
        "Roll out the pizza dough and spread tomato sauce evenly.",
        "Top with slices of fresh mozzarella and fresh basil leaves.",
        "Drizzle with olive oil and season with salt and pepper.",
        "Bake in the preheated oven for 12-15 minutes or until the crust is golden brown.",
        "Slice and serve hot."
      ],
      image: "https://cdn.dummyjson.com/recipe-images/1.webp",
      chef: "Aman",
      desc: "Preheat the oven to 475°F (245°C), Bake in the preheated oven for 12-15 minutes or until the crust is golden brown."
    },
    {
      id: 2,
      title: "Spicy Veg Hakka Noodles",
      ingredients: [
        "Hakka noodles",
        "Carrot (julienned)",
        "Capsicum (sliced)",
        "Cabbage (shredded)",
        "Soy sauce",
        "Chili sauce",
        "Garlic, ginger",
        "Salt and pepper"
      ],
      instructions: [
        "Boil noodles as per instructions and set aside.",
        "Heat oil in a wok, sauté garlic and ginger.",
        "Add vegetables and stir-fry on high flame.",
        "Add soy sauce, chili sauce, salt, and pepper.",
        "Toss in noodles and mix well.",
        "Serve hot with chili vinegar."
      ],
      image: "https://cdn.dummyjson.com/recipe-images/2.webp",
      chef: "Ritika",
      desc: "Quick Indo-Chinese dish full of flavors and vegetables, perfect for a spicy evening snack or meal."
    },
    {
      id: 3,
      title: "Paneer Butter Masala",
      ingredients: [
        "Paneer cubes",
        "Tomato puree",
        "Cream",
        "Butter",
        "Ginger-garlic paste",
        "Spices (garam masala, chili powder)",
        "Salt"
      ],
      instructions: [
        "Heat butter in a pan and sauté ginger-garlic paste.",
        "Add tomato puree and cook till oil separates.",
        "Add spices and mix well.",
        "Add cream and paneer, cook for 5-7 minutes.",
        "Garnish with coriander and serve hot."
      ],
      image: "https://cdn.dummyjson.com/recipe-images/3.webp",
      chef: "Manoj",
      desc: "Creamy North Indian curry made with paneer and rich tomato-based gravy."
    }
  ]);

  const [favroite , setfavroite] = useState(
    JSON.parse(localStorage.getItem("favroite")) || []
  )

  return (
    <recipeContext.Provider value={{data ,setData , favroite , setfavroite}}>
      {props.children}
    </recipeContext.Provider>
  )
}
// 3. custom hook 
export const useRecipe = () => useContext(recipeContext)

export default RecipeContext

