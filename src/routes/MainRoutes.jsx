import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../components/Navbar'  
import Home from '../pages/Home'
import About from '../pages/About'
import PageNotFound from '../pages/PageNotFound'
import Recipes from '../pages/Recipes'
import Update from '../pages/Update'
import Create from '../pages/Create'
import SingleRecipe from '../pages/SingleRecipe'
import Favorite from '../pages/Favroite' 

const MainRoutes = () => {
  return (
    <Routes>
      {/* Layout Route */}
      <Route path='/' element={<Navbar />}>

        <Route index element={<Home />} />
        <Route path='about' element={<About />} />

        <Route path='recipes' element={<Recipes />} />
        <Route path='recipes/create-recipe' element={<Create />} />
        <Route path='recipes/update-recipe' element={<Update />} />
        <Route path='recipes/details/:id' element={<SingleRecipe />} />
        
        <Route path='favorite' element={<Favorite />} />
  
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  )
}

export default MainRoutes
