
import React from 'react';
import { SplideCarousel, SplideSlide } from './SplideCarousel';

const testimonials = [
  { platform: 'On Speak', on: 'speak', color: 'purple', quote: "The Speak program was easy to implement and INVRON LABS’ team offered support & training. The teachers find it helpful and parents like it as they can keep track of their child’s progress on the app.", name: 'Mrs. Swati Srivastava', school: 'Montfort School, Bhopal' },
  { platform: 'On Manage', on: 'manage', color: 'orange', quote: "The School platform is quite easy to use and saves the effort of the staff. The fees dashboard helps us in fee collection, conciliation, as well auto-generation of fee receipt.", name: 'Mr. Anurag Ghosh', school: 'Stanford International School, West Bengal' },
  { platform: 'On Tekie', on: 'tekie', color: 'blue', quote: "Tekie is a coding platform that uses storytelling to make learning to code a movie-like experience which makes coding fun for students. Tekie’s service experience is good too.", name: 'Ms. Kavita', school: 'Teacher, Glentree Academy, Bangalore' },
  { platform: 'On Speak', on: 'speak2', color: 'purple', quote: "Speak’s classroom activities draw big participation from students and they equally love the quizzes on app. The detailed performance reports help us keep a track of students’ progress.", name: 'Mrs. Shivani Kashyap', school: 'Anand Public School, Pune' },
  { platform: 'On Tekie', on: 'tekie2', color: 'blue', quote: "Tekie has a futuristic curriculum that will help students to know more about computers and basics of coding. Tekie’s team is highly cooperative to solve any queries and is ready to help us.", name: 'Mrs. Feroza', school: 'Prestige International School, Bhopal' }
];

const colorClasses = {
  purple: { bg: 'bg-purple-50', text: 'text-purple-700' },
  orange: { bg: 'bg-orange-50', text: 'text-orange-700' },
  blue: { bg: 'bg-blue-50', text: 'text-blue-700' },
};

export const Testimonials: React.FC = () => {
  const options = {
    type: "loop",
    drag: "free",
    pagination: true,
    arrows: false,
    gap: '1rem',
    perPage: 3,
    autoScroll: { speed: 1.5, pauseOnHover: true },
    breakpoints: { 1024: { perPage: 2 }, 768: { perPage: 1 } },
  };

  return (
    <div className="py-16 md:py-24 bg-white">
      <div className="testimonial-review-heading text-center max-w-3xl mx-auto px-6 mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">What are parents saying</h1>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mt-2">about our programs?</h1>
      </div>
      <SplideCarousel id="testimonial-carousel" options={options} ariaLabel="Testimonials">
        {testimonials.map((t, index) => (
          <SplideSlide key={index} className="py-4">
            <div className={`item h-full flex flex-col justify-between ${colorClasses[t.color].bg} p-8 rounded-2xl shadow-lg mx-4 card-hover-lift`}>
              <div>
                <div className={`platform ${colorClasses[t.color].text} font-bold text-lg mb-4`}>{t.platform}</div>
                <div className="desc text-lg text-gray-800">"{t.quote}"</div>
              </div>
              <div className="designation mt-6">
                <div className="details">
                  <div className="name font-bold text-gray-900">{t.name}</div>
                  <div className="grey-text text-gray-600">{t.school}</div>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </SplideCarousel>
    </div>
  );
};
