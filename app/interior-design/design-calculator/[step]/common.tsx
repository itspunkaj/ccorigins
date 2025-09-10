import { calculatorStep, steps } from './types';
import BHKTypeComponent from './_components/bhk-type-component';
import SelectRoomsComponent from './_components/select-rooms-component';
import PackageComponent from './_components/package-component';
import GetQuoteComponent from './_components/get-quote-component';

export const CalculatorSteps: Record<steps, calculatorStep> = {
  [steps.BHKType]: {
    step: 1,
    title: 'Select Your BHK Type',
    subtitle: 'To know more about this,',
    infolink: 'click here',
    component : <BHKTypeComponent/>
  },
  [steps.RoomsToDesign]: {
    step: 2,
    title: "Select the rooms you'd like us to design",
    subtitle: 'To know more about this,',
    infolink: 'click here',
    component : <SelectRoomsComponent/>

  },
  [steps.Package]: {
    step: 3,
    title: 'Pick your package',
    component: <PackageComponent/>
  },
  [steps.GetQuote]: {
    step: 4,
    title: 'Your estimate is almost ready',
    component : <GetQuoteComponent/>
  },
};
