
import React from 'react';

const mediaLogos = ['TechCrunch', 'Inc42', 'Entrackr', 'Economic Times', 'Financial Express'];

export const Media: React.FC = () => (
  <section className="media-container py-16 md:py-24 bg-white">
    <div className="media-content container mx-auto px-6">
      <div className="media-title text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">INVRON LABS in media</h1>
      </div>
      <div className="media-items grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
        {mediaLogos.map(logo => (
          <a key={logo} href="#/" target="_blank" className="media-item media-item-grey">
            <img className="h-10 object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition duration-300" src={`https://picsum.photos/seed/${logo}/150/50`} alt={logo} />
          </a>
        ))}
      </div>
    </div>
  </section>
);
