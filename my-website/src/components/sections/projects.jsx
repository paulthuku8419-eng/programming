import React from 'react';
import cadImage from '../../assets/cad4.jpg';
import cncImage from '../../assets/cnc.jpg';
import plcImage from '../../assets/automation.jpg';

export default function Projects() {
  const projectsData = [
    {
      title: "CAD Project",
      desc: "Detailed 3D engineering design for industrial applications",
      image: cadImage,
    },
    {
      title: "CNC Project",
      desc: "High-precision machining projects with G-code programming",
      image: cncImage,
    },
    {
      title: "PLC Project",
      desc: "Automation logic design for stable, efficient industrial systems",
      image: plcImage,
    },
    // Add more projects here
  ];

  return (
    <div className='py-16 px-6 max-w-6xl mx-auto text-center'>
      <h2 className='text-3xl font-bold mb-4'>Our Projects</h2>
      <p className='text-gray-400 mb-12'>
        A selection of automation, CNC and CAD solutions we've delivered for clients across different industries
      </p>

      <div className='grid md:grid-cols-3 gap-8'>
        {projectsData.map((project, index) => (
          <div
            key={index}
            className='bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transform transition duration-300'
          >
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-48 object-cover'
            />
            <div className='p-6'>
              <h3 className='text-xl font-bold mb-2 text-gray-900'>{project.title}</h3>
              <p className='text-gray-700'>{project.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className='text-gray-400 mt-8'>More projects coming soon...</div>
    </div>
  );
}
