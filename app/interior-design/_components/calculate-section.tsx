import { Button } from '@/components/ui/button';
import { useModalStore } from '@/store/modals-toggle-store';

export default function CalculateSection() {
  const { setIsReferFriendModalOpen } = useModalStore();
  return (
    <section className="bg-black w-full font-bahn">
      <div className="max-w-7xl grid md:grid-cols-2 mx-auto">
        <div className="bg-transparent py-10">
          <div className=" flex max-sm:flex-col items-center justify-center font-light">
            <div className="w-1/3 px-2">
              <Button className="w-full md:text-2xl 4xl:text-4xl py-6 normal-case font-light">
                Calculate
              </Button>
            </div>
            <div className="flex-1/3 text-white max-sm:mt-3 max-sm:text-center">
              <h3 className="text-4xl">Get the estimate</h3>
              <p>Calculate the approximate cost of doing up your home interiors</p>
            </div>
          </div>
        </div>
        <div className="bg-primaryYellow py-10">
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full font-light">
              <Button
                className="w-1/3 md:text-2xl 4xl:text-4xl py-6 text-white normal-case font-extralight"
                variant={'secondary'}
                onClick={() => {
                  setIsReferFriendModalOpen(true);
                }}
              >
                Refer a friend
              </Button>
              <p className="mt-3 text-lg font-white text-center">
                Refer your friend & earn 7% of their project&apos;s value*
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
