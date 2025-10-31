
import React from 'react';

export const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
    <div className="footer-container container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
      <div className="footer-social space-y-4">
        <div>
          <a href="#/"><img src="https://picsum.photos/seed/playstore/180/60" alt="Google Play store badge" className="h-12" /></a>
        </div>
        <div>
          <a href="#/"><img src="https://picsum.photos/seed/appstore/180/60" alt="Apple App store badge" className="h-12" /></a>
        </div>
      </div>
      <div className="hidden lg:block"></div>
      <div className="footer-links">
        <div>
          <p className="footer-link-header text-white font-bold text-lg mb-4">PRODUCTS</p>
          <ul className="space-y-2">
            <li><a href="#/" className="hover:text-white transition duration-300">Learning Programs</a></li>
            <li><a href="#/" className="hover:text-white transition duration-300">School Platform</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-links">
        <div>
          <p className="footer-link-header text-white font-bold text-lg mb-4">COMPANY</p>
          <ul className="space-y-2">
            <li><a href="#/" className="hover:text-white transition duration-300">About Us</a></li>
            <li><a href="#/" className="hover:text-white transition duration-300">Contact Us</a></li>
            <li><a href="#/" className="hover:text-white transition duration-300">Careers</a></li>
            <li><a href="#/" className="hover:text-white transition duration-300">Partner With Us</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright-container container mx-auto px-6 mt-12 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-sm text-center md:text-left">All rights reserved with INVRON LABS</p>
      <div className="footer-policy mt-4 md:mt-0">
        <ul className="flex space-x-4">
          <li><a href="#/" className="hover:text-white transition duration-300 text-sm">Privacy Policy</a></li>
          <li><a href="#/" className="hover:text-white transition duration-300 text-sm">Terms of Service</a></li>
        </ul>
      </div>
    </div>
  </footer>
);
