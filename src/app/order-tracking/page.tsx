'use client';

import React, { useState } from 'react';

function Tracking() {
  const [currentStage, setCurrentStage] = useState(2); // Change this value to set the current stage

  const stages = [
    'Order Placed',
    'Processing',
    'Shipped',
    'Out for Delivery',
    'Delivered',
  ];

  return (
    <div className="bg-gray-100 p-10">
      <h2 className="text-2xl font-bold mb-5">Order Tracking</h2>
      <div className="flex flex-col space-y-4">
        {stages.map((stage, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                index <= currentStage ? 'bg-indigo-500 text-white' : 'bg-gray-300 text-gray-600'
              }`}
            >
              {index + 1}
            </div>
            <div className="ml-4">
              <p className={`font-medium ${index <= currentStage ? 'text-indigo-500' : 'text-gray-600'}`}>
                {stage}
              </p>
              {index < stages.length - 1 && <div className="ml-5 border-l-2 border-gray-300 h-6"></div>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tracking;
