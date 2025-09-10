export default function StepComponent({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-96 max-h-[500px] overflow-scroll flex flex-col gap-3 mt-6 mb-4 px-4">
      {children}
    </div>
  );
}
