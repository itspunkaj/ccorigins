'use client';

import { CalculatorSteps } from '../common';
import { steps } from '../types';

export default function StepProgressBar({ currentStep }: { currentStep: steps }) {
  const stepKeys = Object.keys(CalculatorSteps) as steps[];
  const currentIndex = stepKeys.indexOf(currentStep);

  return (
    <div className="w-full md:w-4/5 px-1 mb-8">
      {/* Circles + connectors */}
      <div className="flex items-center justify-between">
        {stepKeys.map((step, index) => {
          const isCompleted = index < currentIndex;
          const isCurrent = index === currentIndex;

          return (
            <div
              key={step}
              className={`flex items-center ${index < stepKeys.length - 1 && 'flex-1'}`}
            >
              {/* Circle */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors duration-300
                  ${
                    isCompleted || isCurrent
                      ? 'bg-primaryYellow text-white'
                      : 'bg-gray-300 text-gray-600'
                  }`}
              >
                {index + 1}
              </div>

              {/* Line (skip after last circle) */}
              {index < stepKeys.length - 1 && (
                <div
                  className={`flex-1 h-1 transition-colors duration-300
                    ${isCompleted ? 'bg-primaryYellow' : 'bg-gray-300'}`}
                />
              )}
            </div>
          );
        })}
      </div>

      {/* Titles below */}
      {/* <div className="flex  mt-2 text-xs sm:text-sm font-medium text-gray-600">
        {stepKeys.map((step, index) => (
          <span
            key={step}
            className={`w-fit flex-1 text-center ${
              index === currentIndex ? "text-primaryYellow font-semibold" : ""
            }`}
          >
            {CalculatorSteps[step].progress}
          </span>
        ))}
      </div> */}
    </div>
  );
}
