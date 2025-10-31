
import React from 'react';

export const Header: React.FC = () => (
  <header className="header bg-white shadow-sm sticky top-0 z-50">
    <div className="header-container container mx-auto flex items-center justify-between p-4">
      <div className="logo-container">
        <a href="#/" className="text-3xl font-extrabold text-indigo-600 leading-tight">
          <span className="block">INVRON</span>
          <span className="block">LABS</span>
        </a>
      </div>
      <div className="flex-spacer lg:flex-grow"></div>
      <nav className="nav-container hidden lg:flex items-center space-x-6">
        <a href="#/" className="text-gray-600 hover:text-indigo-600 font-medium">Learning Products</a>
        <a href="#/" className="text-gray-600 hover:text-indigo-600 font-medium">School Platform</a>
        <a href="#/" className="btn bg-indigo-600 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-indigo-700 transition duration-300">Request demo</a>
      </nav>
      <div className="lg:hidden">
        {/* Mobile Menu Button can be added here */}
      </div>
    </div>
  </header>
);
