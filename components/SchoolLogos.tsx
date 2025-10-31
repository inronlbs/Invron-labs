
import React from 'react';
import { SplideCarousel, SplideSlide } from './SplideCarousel';

const logos = Array.from({ length: 16 }, (_, i) => `School Logo ${i + 1}`);

export const SchoolLogos: React.FC = () => {
  const commonOptions = {
    type: "loop",
    drag: "free",
    focus: "center",
    autoWidth: true,
    arrows: false,
    pagination: false,
    gap: '4rem',
  };

  const carousel1Options = {
    ...commonOptions,
    autoScroll: { speed: 1, pauseOnHover: true },
  };

  const carousel2Options = {
    ...commonOptions,
    autoScroll: { speed: -1, pauseOnHover: true },
  };

  return (
    <>
      <SplideCarousel id="school-carousel-1" options={carousel1Options} className="school-carousel py-12 bg-gray-100" ariaLabel="Partner Schools">
        {logos.slice(0, 8).map(logo => (
          <SplideSlide key={logo} className="mx-6">
            <img className="h-20 max-w-xs object-contain" src={`https://picsum.photos/seed/${logo}/150/80`} alt={logo} />
          </SplideSlide>
        ))}
      </SplideCarousel>
      <SplideCarousel id="school-carousel-2" options={carousel2Options} className="school-carousel py-12 bg-gray-100 border-t border-gray-200" ariaLabel="More Partner Schools">
        {logos.slice(8, 16).map(logo => (
          <SplideSlide key={logo} className="mx-6">
            <img className="h-20 max-w-xs object-contain" src={`https://picsum.photos/seed/${logo}/150/80`} alt={logo} />
          </SplideSlide>
        ))}
      </SplideCarousel>
    </>
  );
};
