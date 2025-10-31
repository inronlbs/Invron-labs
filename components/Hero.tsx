
import React from 'react';

export const Hero: React.FC = () => (
  <section className="bg-animated-gradient-hero pt-16 pb-20 md:py-24 overflow-hidden">
    <div className="hero-container container mx-auto grid grid-cols-1 gap-12 items-center justify-items-center px-6">
      <div className="hero-image-wrapper flex justify-center items-center animate-float">
        <div className="hero-image-blob shadow-xl w-full max-w-xl" style={{ aspectRatio: '700/450' }}>
          <img className="explore-gif w-full h-full object-cover" src="https://picsum.photos/seed/students/700/450" alt="Smiling students" />
        </div>
      </div>
      <div className="hero-description text-center flex flex-col items-center">
        <div className="explore-heading max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Set up your students
          </h1>
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-600 leading-tight mt-2">for success!</h1>
          <div className="desc text-lg md:text-xl text-gray-700 mt-6">
            <p>Help build essential skills with our scholastic programs</p>
          </div>
          <div className="hero-action mt-10">
            <a href="#/" className="btn bg-indigo-600 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-105 animate-pulse-slow">Request Demo</a>
          </div>
        </div>
      </div>
    </div>
  </section>
);
