'use client';
import StepComponent from './step-component';
import { useRooms } from '@/store/useRooms';

export default function BHKTypeComponent() {
  const { BHK, setBHK } = useRooms();
  return (
    <StepComponent>
      {[1, 2, 3, 4, 5].map((item, index) => {
        const isSelected = item === BHK;
        return (
          <div
            key={index}
            onClick={() => setBHK(item)}
            className={`cursor-pointer border rounded-md w-full p-4 gap-4 flex items-center ${isSelected && 'bg-yellow-50 border-primaryYellow'}`}
          >
            <input
              id={`bhk-${item}`}
              checked={isSelected}
              name="bhk"
              onChange={() => setBHK(item)}
              type="radio"
              className="accent-primaryYellow border-none ring-0"
            />
            <label htmlFor={`${item}`}>
              {item} BHK{item === 5 && '+'}
            </label>
          </div>
        );
      })}
    </StepComponent>
  );
}
