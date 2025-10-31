
import React from 'react';

export const MainProducts: React.FC = () => (
  <section className="home-main-products py-16 md:py-24 bg-white">
    <div className="container mx-auto px-6">
      <div className="home-main-products-header text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">Smarter programs for a new generation of learners.</h2>
        <p className="text-lg md:text-xl text-gray-700 mt-4">Our learning products are designed to be more effective, engaging, and aligned with today's educational needs.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <a href="#/" className="block bg-blue-50 rounded-2xl shadow-lg overflow-hidden card-hover-lift">
          <div className="p-10 flex flex-col justify-between h-full">
            <div className="details">
              <h3 className="text-4xl font-extrabold text-blue-800">Tekie</h3>
              <h4 className="text-xl text-blue-700 mt-2">Computer Science decoded</h4>
              <div className="heading-with-chip mt-4">
                <div className="chip bg-blue-200 text-blue-800 font-semibold px-4 py-1 rounded-full inline-block">
                  <h6>For Grades 1-8</h6>
                </div>
              </div>
              <p className="text-blue-600 mt-4 text-lg">Learn coding through interactive storytelling and hands-on projects that make programming fun and accessible.</p>
            </div>
            <div className="banner mt-8 text-center">
              <img className="inline-block max-h-64 w-full object-cover rounded-lg" src="https://picsum.photos/seed/tekie/500/350" alt="tekie" />
            </div>
          </div>
        </a>
        <a href="#/" className="block bg-purple-50 rounded-2xl shadow-lg overflow-hidden card-hover-lift">
          <div className="p-10 flex flex-col justify-between h-full">
            <div className="details">
              <h3 className="text-4xl font-extrabold text-purple-800">Speak</h3>
              <h4 className="text-xl text-purple-700 mt-2">Engage the world with fluent spoken English</h4>
              <div className="heading-with-chip mt-4">
                <div className="chip bg-purple-200 text-purple-800 font-semibold px-4 py-1 rounded-full inline-block">
                  <h6>For Grades LKG-8</h6>
                </div>
              </div>
              <p className="text-purple-600 mt-4 text-lg">Build confidence in communication with engaging activities and real-world conversation practice.</p>
            </div>
            <div className="banner mt-8 text-center">
              <img className="inline-block max-h-64 w-full object-cover rounded-lg" src="https://picsum.photos/seed/speak/500/350" alt="speak" />
            </div>
          </div>
        </a>
      </div>
    </div>
  </section>
);
