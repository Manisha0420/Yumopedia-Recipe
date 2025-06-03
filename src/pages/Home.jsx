import React from "react";

const Home = () => {
  return (
    <div className="">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold  ">Learn, Cook, & Eat your food</h1>
          <buttons className="flex gap-3 items-center p-4">
            <button className="px-5 pt-2 border rounded-2xl hover:bg-black hover:text-teal-50">
              Pizza
            </button>
            <button className="px-5 pt-2 border rounded-2xl  hover:bg-black hover:text-teal-50">
              Dessert
            </button>
            <button className="px-5 pt-2 border rounded-2xl  hover:bg-black hover:text-teal-50 ">
              Noodele
            </button>
            <button className="px-5 pt-2 border rounded-2xl  hover:bg-black hover:text-teal-50">
              Salad
            </button>
          </buttons>
        </div>
        <div className="flex gap-10">
          <div>
            <h3 className="font-bold  text-2xl text-[#1EBB71]">120</h3>
            <p>videos</p>
          </div>
          <div>
            <h3 className="font-bold  text-2xl text-[#1EBB71]">120</h3>
            <p>Recipes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
