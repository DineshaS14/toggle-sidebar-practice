import React from 'react';

type SidebarProps = {
  onChange: (value: string) => void; // Function to update the parent state
};

const Sidebar: React.FC<SidebarProps> = ({ onChange }) => {
  const handleClick = (value: string) => {
    onChange(value); // Call the passed `onChange` function with a value
  };

  return (
    <div className="flex flex-col w-1/5">
      <h3 className='text-center'>Sidebar</h3>
      <button onClick={() => handleClick('Option 1')}>Option 1</button>
      <button onClick={() => handleClick('Option 2')}>Option 2</button>
      <button onClick={() => handleClick('Option 3')}>Option 3</button>
    </div>
  );
};

export default Sidebar;
