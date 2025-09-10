'use client';
import { use } from 'react';
import { CalculatorSteps } from './common';
import { steps } from './types';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import StepProgressBar from './_components/StepProgressBar';

// 🔹 Progress bar component inside same file for simplicity

export default function Page({ params }: { params: Promise<{ step: string }> }) {
  const { step } = use(params);
  if (!step || !(step in CalculatorSteps)) {
    return <div>Invalid Step!</div>;
  }
  const router = useRouter();

  const currentStep = CalculatorSteps[step as steps];
  const stepKeys = Object.keys(CalculatorSteps) as steps[];
  const currentIndex = stepKeys.indexOf(step as steps);

  const goToStep = (index: number) => {
    if (index >= 0 && index < stepKeys.length) {
      router.push(`/interior-design/design-calculator/${stepKeys[index]}`);
    }
  };

  return (
    <div className="w-screen min-h-screen flex items-center flex-col justify-center bg-gray-100 pt-20">
      <StepProgressBar currentStep={step as steps} />
      <div className="bg-white rounded-lg shadow-lg md:w-1/2 w-full">
        {/* 🔹 Inserted progress bar here */}

        <div className="p-6 flex items-center justify-center flex-col">
          <h1 className="text-xl font-bold mb-4">{currentStep.title}</h1>
          {currentStep.subtitle && (
            <p>
              <span className="text-gray-600">{currentStep.subtitle}</span>
              {currentStep.infolink && (
                <span className="text-primaryYellow">&nbsp;{currentStep.infolink}</span>
              )}
            </p>
          )}
          {currentStep.component && <div>{currentStep.component}</div>}
        </div>

        <div className="px-6 py-4 flex justify-between border-t">
          <Button
            className="border-none flex items-center gap-1 font-thin"
            variant={'outline'}
            disabled={currentIndex === 0}
            onClick={() => goToStep(currentIndex - 1)}
          >
            <ArrowLeft />
            <span>Back</span>
          </Button>
          {currentIndex !== stepKeys.length - 1 && (
            <Button className="border-none font-thin" onClick={() => goToStep(currentIndex + 1)}>
              Next
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
