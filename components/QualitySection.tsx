
import React from 'react';

export const QualitySection: React.FC = () => (
  <section className="school-stats py-16 md:py-24 bg-indigo-50">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="school-stats-item text-center">
        <div className="count text-4xl md:text-5xl font-extrabold text-indigo-600">Expert-Crafted Curriculum</div>
        <div className="desc text-xl text-gray-700 mt-3">Programs designed by leading educators.</div>
      </div>
      <div className="school-stats-item text-center">
        <div className="count text-4xl md:text-5xl font-extrabold text-indigo-600">Engaging & Effective</div>
        <div className="desc text-xl text-gray-700 mt-3">Learning experiences built for joy and impact.</div>
      </div>
    </div>
  </section>
);
