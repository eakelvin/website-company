import { Greentick } from '@/assets/svg';
import React from 'react';

const steps = [
  { title: 'Personal Info', details: 'Step details here', iconColor: 'green' },
  { title: 'Account Info', details: 'Step details here', iconColor: 'gray' },
  { title: 'Review', details: 'Step details here', iconColor: 'gray' },
  { title: 'Confirmation', details: 'Step details here', iconColor: 'gray' },
];

const StepList: React.FC = () => {
  return (
    <ol className="relative -z-50 text-gray-500 border-s border-gray-200 dark:border-gray-700">
      {steps.map((step, index) => (
        <li key={index} className="mb-10 ms-6">
          <span className={`absolute flex items-center justify-center w-8 h-8 bg-${step.iconColor}-200 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-${step.iconColor}-900`}>
            <Greentick />
          </span>
          <h3 className="font-medium leading-tight text-lime-400">{step.title}</h3>
          <p className="text-sm font-normal">{step.details}</p>
        </li>
      ))}
    </ol>
  );
};

export default StepList;
