import React from 'react';

const Scorecard = ({ score }) => {
  return (
    <div>
      <div className="text-4xl font-bold w-fit m-auto">
        <div>Scorecard</div>
        <div className="bg-blue-300 text-white rounded-md px-4 py-6 flex flex-col items-center">
          {score}
        </div>
      </div>
    </div>
  );
};

export default Scorecard;
