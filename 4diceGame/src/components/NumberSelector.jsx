import React from 'react';

const NumberSelector = ({ selectedNumber, setSelectedNumber, message }) => {
  return (
    <div className="flex flex-col items-center">
      <div className='h-20 flex items-center justify-center text-4xl text-red-500 font-semibold'>
        {message && message}
      </div>
      <div className="flex items-center">
        <div className="w-screen p-10 flex justify-center items-center gap-5">
          {[1, 2, 3, 4, 5, 6].map((number) => (
            <Button
              onClick={() => setSelectedNumber(number)}
              key={number}
              number={number}
              selected={selectedNumber === number}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

function Button({ number, onClick, selected }) {
  return (
    <button
      onClick={onClick}
      className={`w-20 h-20 text-4xl cursor-pointer border rounded transition duration-300 ease-in-out 
        ${selected
          ? "bg-white text-black scale-105 border-blue-500 shadow-xl"
          : "bg-black text-white hover:bg-white hover:text-black hover:scale-105"
        }`}
    >
      {number}
    </button>
  );
}

export default NumberSelector;
