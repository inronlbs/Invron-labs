
import React from 'react';
import { AIAssistant } from './AIAssistant';

const managementItems = [
  { icon: '💸', name: 'Fees', desc: 'Ensure better cash flow management & reporting' },
  { icon: '✔️', name: 'Attendance', desc: 'Help reduce teachers’ non-academic effort' },
  { icon: '💬', name: 'Communication', desc: 'Connect securely with all stakeholders' },
  { icon: ' A+', name: 'Report Card', desc: 'Keep parents updated on child\'s progress' },
];

export const SchoolManagement: React.FC = () => (
  <section className="school-management-card-box bg-gray-900 py-16 md:py-24 text-white">
    <div className="container mx-auto px-6">
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-10">
        <div className="head mb-6 lg:mb-0">
          <div className="title text-4xl md:text-5xl font-extrabold">
            <span className="block">School Management</span>
            <span className="block">Software</span>
          </div>
        </div>
        <div className="action-btn">
          <a href="#/" className="text-indigo-400 font-semibold hover:underline text-lg">View More</a>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {managementItems.map(item => (
          <div key={item.name} className="school-management-card-item bg-gray-800 p-6 rounded-2xl shadow-lg card-hover-lift">
            <div className="icon h-12 w-12 mb-4 text-3xl flex items-center justify-center bg-gray-700 rounded-full">{item.icon}</div>
            <div className="item-name text-2xl font-bold text-white">{item.name}</div>
            <p className="desc text-gray-300 mt-2">{item.desc}</p>
          </div>
        ))}
      </div>
      <AIAssistant />
    </div>
  </section>
);
