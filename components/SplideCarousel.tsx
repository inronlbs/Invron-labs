
import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    Splide: any;
    splide: {
      Extensions: any;
    }
  }
}

interface SplideCarouselProps {
  id: string;
  options: any;
  children: React.ReactNode;
  className?: string;
  ariaLabel: string;
}

export const SplideCarousel: React.FC<SplideCarouselProps> = ({ id, options, children, className, ariaLabel }) => {
  const splideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let splideInstance: any;
    if (splideRef.current && window.Splide) {
      splideInstance = new window.Splide(splideRef.current, options);
      
      if (options.autoScroll && window.splide && window.splide.Extensions) {
        splideInstance.mount(window.splide.Extensions);
      } else {
        splideInstance.mount();
      }
    }
    return () => {
      splideInstance?.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options]);

  return (
    <section ref={splideRef} id={id} className={`splide ${className || ''}`} aria-label={ariaLabel}>
      <div className="splide__track">
        <ul className="splide__list">
          {children}
        </ul>
      </div>
    </section>
  );
};

interface SplideSlideProps {
  children: React.ReactNode;
  className?: string;
}

export const SplideSlide: React.FC<SplideSlideProps> = ({ children, className }) => {
  return (
    <li className={`splide__slide ${className || ''}`}>
      {children}
    </li>
  );
};
