
import React from 'react';

const products = [
  { name: 'ignite', subject: 'English', grade: '(Grade 1 - 5)', seed: 'english' },
  { name: 'Hexa', subject: 'Computer Science', grade: '(Grade 1 - 8)', seed: 'compsci' },
  { name: 'quest', subject: 'Social Science', grade: '(Grade 3 - 5)', seed: 'social' },
  { name: 'aware', subject: 'GK & Current Affairs', grade: '(Grade 1 - 8)', seed: 'gk' },
  { name: 'imagine', subject: 'Mathematics', grade: '(Grade 1 - 8)', seed: 'maths' },
  { name: 'perfect', subject: 'Maths Workbook', grade: '(Grade 6 - 8)', seed: 'workbook' },
  { name: 'reflection', subject: 'Science', grade: '(Grade 3 - 5)', seed: 'science' },
  { name: 'discover', subject: 'EVS', grade: '(Grade 1 - 5)', seed: 'evs' },
];

const ProductItem: React.FC<{ name: string, subject: string, grade: string, seed: string }> = ({ name, subject, grade, seed }) => (
  <a href="#/" className="home-main-subjects-item text-center group">
    <div className="bg-white p-4 rounded-2xl shadow-lg card-hover-lift h-full flex flex-col">
      <img className="w-full rounded-lg mb-3 aspect-square object-cover" src={`https://picsum.photos/seed/${seed}/150/150`} alt={name} />
      <div className="mt-auto">
        <h4 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600">{name}</h4>
        <p className="text-gray-600">{subject}</p>
        <p className="text-sm text-gray-500">{grade}</p>
      </div>
    </div>
  </a>
);

export const LearningProducts: React.FC = () => (
  <section className="home-main-subjects-wrapper py-16 md:py-24 bg-gray-50">
    <div className="home-main-subjects container mx-auto px-6">
      <div className="home-main-subjects-header flex justify-between items-center mb-10">
        <h3 className="title text-4xl md:text-5xl font-extrabold text-gray-900">Learning Products</h3>
        <div className="action hidden md:block">
          <a href="#/" className="text-indigo-600 font-semibold hover:underline">View More</a>
        </div>
      </div>
      <div className="home-main-subjects-items grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
        {products.map(p => <ProductItem key={p.name} {...p} />)}
      </div>
      <div className="action md:hidden text-center mt-10">
        <a href="#/" className="text-indigo-600 font-semibold hover:underline">View More</a>
      </div>
    </div>
  </section>
);
