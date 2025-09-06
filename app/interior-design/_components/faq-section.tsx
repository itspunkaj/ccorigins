'use client';
import { Minus, PlusIcon } from 'lucide-react';
import { useState } from 'react';

const FAQs = [
  {
    id: 1,
    ques: 'Why do I need an interior design ?',
    ans: 'An interior designer is like a Art director-they shape your vision from start to finish, ensuring every detail comes together seamlessly. By understanding your taste and lifestyle, they deliver a dream home with custom pieces that fit perfectly. From raw materials to final touches, they handle it all.',
  },
  {
    id: 2,
    ques: 'Why is CCO perfect for your home interior design ?',
    ans: 'CCO is your trusted partner in creating home interiors that truly reflect your style. Our expert designers personalize every detail to suit your needs-listening to your ideas and offering thoughtful solutions. By blending creativity with advanced technology, we deliver flawless modular interiors while ensuring a faster, hassle-free experience. Book your consultation today dream home to life with CCO.',
  },
  {
    id: 3,
    ques: 'Why is CCO perfect for your home interior design ?',
    ans: 'CCO is your trusted partner in creating home interiors that truly reflect your style. Our expert designers personalize every detail to suit your needs-listening to your ideas and offering thoughtful solutions. By blending creativity with advanced technology, we deliver flawless modular interiors while ensuring a faster, hassle-free experience. Book your consultation today dream home to life with CCO.',
  },
  {
    id: 4,
    ques: 'What services are included under home interior design ?',
    ans: 'CCO is your one-stop destination for designing the home of your dreams. From concept to completion, our expert designers manage every aspect design, delivery and execution, so you can enjoy a stress-free experience. We provide end-to-end services, including modular interiors, false ceiling installation, civil work, painting, electricals, plumbing, flooring, and tiling. Whether you’re setting up a new home or renovating an existing one, CCO has you covered. Looking for ideas? Explore our latest kitchen, living room, and bedroom designs to spark inspiration and begin your home interior journey with CCO.',
  },
  {
    id: 5,
    ques: 'What will be the timelines for my project completion ?',
    ans: 'We ensure a 45-day Move-in Guarantee for modular interiors, meaning installation is completed and your home is ready within that period. For complete home interiors, the timeline extends to 90 days. Project duration may vary depending on factors like material availability, design approvals, customer feedback, and site readiness. Please note, terms and conditions apply.',
  },
];

export default function FAQSection() {
  const [openedFAQ, setOpenedFAQ] = useState<number>(-1);
  return (
    <section className="w-full bg-gray-200 py-14">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl 4xl:text-6xl font-medium">FAQs About Home Interior Design</h2>
        <div className="my-4 flex flex-col gap-2">
          {FAQs.map((faq) => {
            return (
              <div key={faq.id} className="bg-white border border-black/30 p-4">
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    if (faq.id !== openedFAQ) setOpenedFAQ(faq.id);
                    else setOpenedFAQ(-1);
                  }}
                >
                  <div className="flex-1 text-lg font-semibold">
                    {faq.id}. {faq.ques}
                  </div>
                  <div className="w-10 flex items-center justify-center">
                    {faq.id !== openedFAQ ? (
                      <PlusIcon className="w-5 h-5" />
                    ) : (
                      <Minus className="w-5 h-5" />
                    )}
                  </div>
                </div>
                {openedFAQ === faq.id && <div className="text-gray-500">{faq.ans}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
