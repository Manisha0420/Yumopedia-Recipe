import React from "react";

const About = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Intro Section */}
      <section className="bg-gradient-to-br from-green-100 to-green-50 py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl font-extrabold text-green-700 mb-4">
            Who We Are
          </h1>
          <p className="text-lg text-gray-700">
            At <span className="font-semibold text-gray-900">Yumo Pedia</span>,
            we believe food is not just fuel — it's an experience. We share simple,
            delicious recipes that bring people together, one dish at a time.
          </p>
        </div>
      </section>

      {/* Mission + Image */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?q=80&w=1000"
            alt="Our Kitchen"
            className="rounded-2xl shadow-2xl"
          />
        </div>
        <div>
          <h2 className="text-4xl font-bold text-green-600 mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We make cooking easy and joyful for everyone, regardless of their
            skill level. From global cuisines to healthy meal prep ideas, our
            recipes are designed to inspire confidence and creativity in the kitchen.
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Authentic recipes curated by home chefs and professionals</li>
            <li>Focus on fresh, seasonal, and accessible ingredients</li>
            <li>Step-by-step guides with images and tips</li>
            <li>Free and open to all—always</li>
          </ul>
        </div>
      </section>

      {/* Why Choose Us Grid */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-700 mb-12">
            Why Choose Delish Dishes?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
            <FeatureCard
              title="Easy to Follow"
              description="Clear instructions with prep time, tips, and substitutions."
            />
            <FeatureCard
              title="Healthy Options"
              description="Balanced recipes with vegetarian and vegan choices."
            />
            <FeatureCard
              title="Quick Meals"
              description="Dinner on the table in under 30 minutes — yes, really."
            />
            <FeatureCard
              title="Global Flavors"
              description="Explore tastes from around the world with simple ingredients."
            />
            <FeatureCard
              title="Community Driven"
              description="Recipes shared and reviewed by fellow food lovers like you."
            />
            <FeatureCard
              title="Mobile Friendly"
              description="Perfectly readable on your phone or tablet while cooking."
            />
          </div>
        </div>
      </section>

      <section className="text-center py-20 bg-green-600 text-white px-6">
        <h2 className="text-4xl font-extrabold mb-4">
          Ready to Cook Something Delicious?
        </h2>
        <p className="mb-8 text-lg">
          Start exploring our curated recipes and become the chef of your home.
        </p>
        <a
          href="/recipes"
          className="inline-block bg-white text-green-600 font-semibold px-8 py-3 rounded-full shadow hover:bg-gray-100 transition"
        >
          Browse Recipes
        </a>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white shadow-md rounded-xl p-6 text-center hover:shadow-lg transition">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default About;
