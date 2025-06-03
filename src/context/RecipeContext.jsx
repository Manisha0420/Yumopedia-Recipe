import React, { createContext, useContext, useState } from 'react'


// 1. Context object banaya gaya
const recipeContext = createContext(null);
// 2. provider Context
const RecipeContext = (props) => {
  const [data , setData] = useState([]);
  return (
    <recipeContext.Provider value={{data ,setData}}>
      {props.children}
    </recipeContext.Provider>
  )
}
// 3. custom hook 
export const useRecipe = () => useContext(recipeContext)

export default RecipeContext

