import { calculatorStep, steps } from './types';
import BHKTypeComponent from './_components/bhk-type-component';
import SelectRoomsComponent from './_components/select-rooms-component';
import PackageComponent from './_components/package-component';
import GetQuoteComponent from './_components/get-quote-component';

export const CalculatorSteps: Record<steps, calculatorStep> = {
  [steps.BHKType]: {
    step: 1,
    progress: 'BHK Type',
    title: 'Select Your BHK Type',
    component: <BHKTypeComponent />,
  },
  [steps.RoomsToDesign]: {
    step: 2,
    progress: 'Rooms',
    title: "Select the rooms you'd like us to design",
    component: <SelectRoomsComponent />,
  },
  [steps.Package]: {
    step: 3,
    progress: 'Package',
    title: 'Pick your package',
    component: <PackageComponent />,
  },
  [steps.GetQuote]: {
    step: 4,
    progress: 'Quote',
    title: 'Your estimate is almost ready',
    component: <GetQuoteComponent />,
  },
};
