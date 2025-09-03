import '../styles.css';

import Image from 'next/image';
export default function Testimony() {
  return (
    <div className="container-fluid h-96">
      <div className="grid grid-cols-12">
        <div
          className="
                    col-span-12
                    sm:col-start-2 sm:col-end-12
                    md:col-start-3 md:col-end-11
                    lg:col-start-3 lg:col-end-11
                    xl:col-start-3 xl:col-end-11
                  "
        >
          <div className="card !bg-primaryYellow !border-0">
            <p className="post">
              <span>
                <Image height={1000} width={1000} alt="" className="quote-img" src="/quotes.svg" />
              </span>
              <span className="text-black">
                I upgraded my Dribble account to the Pro version. Absolutely loving the super clean
                look of the Playbook feature{' '}
              </span>
              <span>
                <Image
                  height={1000}
                  width={1000}
                  alt=""
                  className="nice-img"
                  src="https://i.imgur.com/l5AkSHd.png"
                />
              </span>
            </p>
          </div>
          <div className="arrow-down  !border-t-primaryYellow"></div>
          <div className="flex items-center">
            <div className="">
              <Image
                height={1000}
                width={1000}
                alt=""
                className="w-[120px] h-[120px] rounded-full object-cover"
                src="https://i.imgur.com/RCwPA3O.jpg"
              />
            </div>
            <p className="text-2xl text-[#616161] ml-6">Anne Snow</p>
          </div>
        </div>
      </div>
    </div>
  );
}
