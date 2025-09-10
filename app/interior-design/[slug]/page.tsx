'use client';
import { use, useEffect, useState } from 'react';
import { content, fullHomeContent } from './common';
import ImageBento from './_components/image-bento';
import CalculateSection from '../_components/calculate-section';
import CTASection from '../_components/cta-section';
import ReferFriendModalForm from '../_components/refer-your-friend-modal-form';
import { useModalStore } from '@/store/modals-toggle-store';

export default function ({ params }: { params: Promise<{ slug: string }> }) {
  const [content, setContent] = useState<content>();
  const { slug } = use(params);
  const { isReferFriendModalOpen } = useModalStore();

  useEffect(() => {
    if (slug === 'full-home') {
      setContent(fullHomeContent);
    }
  }, []);

  return (
    <>
      <div className="w-full h-full">
        <section className="w-full bg-black text-white flex flex-col items-start pt-28 pb-14">
          <div className="max-w-7xl w-full mx-auto max-sm:px-2">
            <h1 className=" text-4xl">{content?.title}</h1>
            <p className="font-thin">{content?.subtitle}</p>
          </div>
        </section>
        <section className="w-full bg-white">
          <div className="max-w-7xl mx-auto my-2 max-sm:px-2">
            <h2 className="mt-6 mb-2 text-2xl">{content?.subheader}</h2>
            {content?.images1 && <ImageBento props={{ images: content?.images1 }} />}
          </div>
        </section>
        <CalculateSection />
        <section className="w-full bg-white">
          <div className="max-w-7xl mx-auto my-2 max-sm:px-2">
            {content?.images1 && <ImageBento props={{ images: content?.images2 }} />}
          </div>
        </section>
        <CTASection />
      </div>
      {isReferFriendModalOpen && <ReferFriendModalForm />}
    </>
  );
}
