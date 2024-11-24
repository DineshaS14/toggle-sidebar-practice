'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar'; // Import Sidebar component

const Age: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>(''); // State for sidebar
  const [sideBarToggle, setSideBarToggle] = useState<boolean>(false);

  const handleSidebarChange = (value: string) => {
    setSelectedOption(value); // Update state when sidebar changes
  };
  const handleToggleChange = () => {
    setSideBarToggle((previousValue) => ! previousValue);
  } // handleToggleChange sets the sideBarToggle var to true if false if false to true
  return (
    <div className='basis-1/4 flex flex-col'>
        <button
        className='bg-black text-white w-1/6'
        onClick={handleToggleChange}
      >
        Toggle
      </button>
      {/* Sidebar with onChange prop */}
      <div className='flex-row flex'>
      {sideBarToggle && (<Sidebar onChange={handleSidebarChange} />)}
      
      <div className='w-full text-center py-56 bg-blue-950'>
        <h1>Age Page</h1>
        <p>Selected Option: {selectedOption || 'None'}</p>
      </div>
      </div>
      {/* Main content */}
      
    </div>
  );
};

export default Age;
