
import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MainProducts } from './components/MainProducts';
import { LearningProducts } from './components/LearningProducts';
import { SchoolManagement } from './components/SchoolManagement';
import { CompanyMission } from './components/CompanyMission';
import { QualitySection } from './components/QualitySection';
import { SchoolLogos } from './components/SchoolLogos';
import { Testimonials } from './components/Testimonials';
import { Awards } from './components/Awards';
import { Media } from './components/Media';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MainProducts />
        <LearningProducts />
        <SchoolManagement />
        <CompanyMission />
        <QualitySection />
        <SchoolLogos />
        <Testimonials />
        <Awards />
        <Media />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
};

export default App;
