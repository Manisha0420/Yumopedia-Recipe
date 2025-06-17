import React, { useState } from "react";

const recipes =  [
    {
      "name": "Spaghetti Aglio e Olio",
      "image": "https://plus.unsplash.com/premium_photo-1691948106030-d5e76d461b14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3BhZ2hldHRpJTIwQWdsaW8lMjBlJTIwT2xpb3xlbnwwfHwwfHx8MA%3D%3D"
    },
    {
      "name": "Margherita Pizza",
      "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww"
    },
    {
      "name": "Paneer Butter Masala",
      "image": "https://images.unsplash.com/photo-1701579231378-3726490a407b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuZWVyJTIwQnV0dGVyJTIwTWFzYWxhfGVufDB8fDB8fHww",
    },
    {
      "name": "Veggie Tacos",
      "image": "https://plus.unsplash.com/premium_photo-1678051141689-1f7a7861b3b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dmVnaWVzJTIwdGFjb3N8ZW58MHx8MHx8fDA%3D",
      
    },
     {
      "name": "Margherita Pizza",
      "image": "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww"
    },
    {
      "name": "Paneer Butter Masala",
      "image": "https://images.unsplash.com/photo-1701579231378-3726490a407b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGFuZWVyJTIwQnV0dGVyJTIwTWFzYWxhfGVufDB8fDB8fHww",
    },
  ]
const Home = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleRecipes = showAll ? recipes : recipes.slice(0, 3);

  return (
    <div className="bg-gradient-to-b from-green-50 to-white text-gray-800">
      {/* Top Section */}
      <div className="flex justify-between items-start flex-wrap px-6 py-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">Learn, Cook, & Eat your food</h1>
          <div className="flex gap-3 flex-wrap">
            <button className="px-5 py-2 border rounded-2xl hover:bg-black hover:text-white transition">
              Pizza
            </button>
            <button className="px-5 py-2 border rounded-2xl hover:bg-black hover:text-white transition">
              Dessert
            </button>
            <button className="px-5 py-2 border rounded-2xl hover:bg-black hover:text-white transition">
              Noodle
            </button>
            <button className="px-5 py-2 border rounded-2xl hover:bg-black hover:text-white transition">
              Salad
            </button>
          </div>
        </div>
        <div className="flex gap-10 mt-6 md:mt-0">
          <div>
            <h3 className="font-bold text-2xl text-[#1EBB71]">120</h3>
            <p>Videos</p>
          </div>
          <div>
            <h3 className="font-bold text-2xl text-[#1EBB71]">120</h3>
            <p>Recipes</p>
          </div>
        </div>
      </div>

      <section className="py-20 px-4 text-center bg-gradient-to-r from-green-100 to-green-50">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-green-700 mb-6">
            Cook With Love, Eat With Joy 🍽️
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Discover tasty recipes made simple and fun.
          </p>
          <a
            href="/recipes"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full transition"
          >
            Explore All Recipes
          </a>
        </div>
      </section>
      
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-green-700 mb-10 text-center">
          Featured Recipes
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {visibleRecipes.map((recipe, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-green-800">
                  {recipe.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
