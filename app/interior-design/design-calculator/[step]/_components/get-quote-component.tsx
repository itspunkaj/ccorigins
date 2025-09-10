import { Input } from '@/components/ui/input';
import StepComponent from './step-component';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import { Button } from '@/components/ui/button';

export default function GetQuoteComponent() {
  return (
    <StepComponent>
      <div className="flex flex-col gap-4 my-4">
        <Input placeholder="Name" />
        <Input placeholder="Email ID" />
        <Input placeholder="Phone" />
        <div className="flex items-center text-sm text-slate-500">
          <input type="checkbox" />
          <IconBrandWhatsapp className="size-5 mx-1" />
          <span className="flex-1">Send updates on Whatsapp</span>
        </div>
        <Input placeholder="Project Name" />
      </div>
      <Button className="rounded-full w-full">Submit</Button>
      <p className="text-center text-sm mt-2">
        By submitting this form, you agree to the privacy policy & terms and conditions
      </p>
    </StepComponent>
  );
}
