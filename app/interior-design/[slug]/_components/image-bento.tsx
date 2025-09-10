import Image from 'next/image';
import { image } from '../common';
export default function ImageBento({ props }: { props: { images: image[] } }) {
  return (
    <div className="w-full grid grid-cols-6 gap-2">
      {props.images.map((img, index) => {
        return (
          <div className={`col-span-3 ${img.class} flex items-center justify-center`} key={index}>
            <Image src={img.url} className={`w-full`} height={500} width={400} alt={img.id} />
          </div>
        );
      })}
    </div>
  );
}
