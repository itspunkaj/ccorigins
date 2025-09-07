'use client';
import { X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useModalStore } from '@/store/modals-toggle-store';

type ReferralTier = {
  label: string;
  percentage: string;
};

const referralTiers: ReferralTier[] = [
  { label: '1st Referrals', percentage: '3%' },
  { label: '2nd Referrals', percentage: '5%' },
  { label: '3rd referral and beyond', percentage: '7%' },
];
export default function ReferFriendModalForm() {
  const { setIsReferFriendModalOpen } = useModalStore();
  return (
    <div className="fixed inset-0  bg-black bg-opacity-50 z-[100] overflow-scroll">
      <div className="relative bg-[url(/images/interior-design/referral-bg.jpg)] bg-cover">
        <button
          className="absolute text-white top-5 right-5"
          onClick={() => {
            setIsReferFriendModalOpen(false);
          }}
        >
          <X />
        </button>
        <div className="grid md:grid-cols-3 p-4 pt-10 md:p-20 min-h-screen min-w-screen">
          <div className="md:col-span-2 flex flex-col justify-between text-white ">
            <div>
              <h3 className="uppercase text-4xl font-cinzel">
                Refer your friend & earn 7% of their project&apos;s value*
              </h3>
            </div>
            <div className="">
              <p>Here&apos;s how much you&apos;ll earn</p>
              <table className="w-full md:w-1/2 text-center text-sm rounded-lg overflow-hidden border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-primaryYellow border text-gray-700">
                    <th className="px-4 py-2 font-medium border border-gray-300">Referrals</th>
                    <th className="px-4 py-2 font-medium border border-gray-300">Referrer gets</th>
                  </tr>
                </thead>
                <tbody>
                  {referralTiers.map((tier, index) => (
                    <tr
                      key={index}
                      className="border-t last:border-b bg-white bg-opacity-70 hover:bg-gray-50 text-gray-600"
                    >
                      <td className="px-4 py-2 border border-gray-300">{tier.label}</td>
                      <td className="px-4 py-2 border border-gray-300">{tier.percentage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className=" py-3 text-sm text-gray-300">
                *Project&apos;s value is the net amount paid by the Referee excluding GST.
              </div>
            </div>
          </div>
          <div className="my-auto">
            <div className="bg-white rounded-lg px-4 py-8 md:p-8">
              <div className="">
                <h3 className="text-2xl ">Fill in your friend&apos;s details</h3>
                <p className="font-thin">Please fill you & your friend details</p>
              </div>
              <div className="flex flex-col gap-4 my-8">
                <Input placeholder="Your Name" />
                <Input placeholder="Phone Number" type="tel" />
                <Input placeholder="Your Friend's Name" />
                <Input placeholder="Phone Number" type="tel" />
                <button className="text-sm text-slate-600">+ Refer Another Friend</button>
              </div>
              <div>
                <Button className="border-none rounded-full w-full normal-case py-6">
                  Refer Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
