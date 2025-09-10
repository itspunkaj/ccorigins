import { url } from 'inspector';

export interface image {
  id: string;
  url: string;
  class: string;
}
export interface content {
  title: string;
  subtitle: string;
  subheader: string;
  images1: image[];
  images2: image[];
}

export const fullHomeContent = {
  title: 'Inspiration for interior designs',
  subtitle: 'Upgrade your home effortlessly with these curated inspirations',
  subheader: 'Full Home',
  images1: [
    {
      id: '1',
      url: '/images/interior-design/full-home/01.jpg',
      class: '',
    },
    {
      id: '2',
      url: '/images/interior-design/full-home/02.jpg',
      class: '',
    },
    {
      id: '3',
      url: '/images/interior-design/full-home/03.jpg',
      class: '',
    },
    {
      id: '4',
      url: '/images/interior-design/full-home/04.jpg',
      class: '',
    },
    {
      id: '5',
      url: '/images/interior-design/full-home/05.jpg',
      class: '',
    },
    {
      id: '6',
      url: '/images/interior-design/full-home/06.jpg',
      class: 'row-span-2',
    },
    {
      id: '7',
      url: '/images/interior-design/full-home/07.jpg',
      class: '',
    },
    {
      id: '8',
      url: '/images/interior-design/full-home/08.jpg',
      class: '',
    },
    {
      id: '9',
      url: '/images/interior-design/full-home/09.jpg',
      class: '',
    },
    {
      id: '10',
      url: '/images/interior-design/full-home/10.jpg',
      class: '',
    },
    {
      id: '11',
      url: '/images/interior-design/full-home/11.jpg',
      class: '',
    },
  ],
  images2: [
    {
      id: '13',
      url: '/images/interior-design/full-home/13.jpg',
      class: '',
    },
    {
      id: '14',
      url: '/images/interior-design/full-home/14.jpg',
      class: '',
    },
    {
      id: '15',
      url: '/images/interior-design/full-home/15.jpg',
      class: '',
    },
    {
      id: '16',
      url: '/images/interior-design/full-home/16.jpg',
      class: '',
    },
    {
      id: '17',
      url: '/images/interior-design/full-home/17.jpg',
      class: 'row-span-2',
    },
    {
      id: '18',
      url: '/images/interior-design/full-home/18.jpg',
      class: '',
    },
    {
      id: '19',
      url: '/images/interior-design/full-home/19.jpg',
      class: '',
    },
    {
      id: '20',
      url: '/images/interior-design/full-home/20.jpg',
      class: '',
    },
    {
      id: '21',
      url: '/images/interior-design/full-home/21.jpg',
      class: '',
    },
    {
      id: '22',
      url: '/images/interior-design/full-home/22.jpg',
      class: '!col-span-2',
    },
    {
      id: '23',
      url: '/images/interior-design/full-home/23.jpg',
      class: '!col-span-2',
    },
    {
      id: '24',
      url: '/images/interior-design/full-home/24.jpg',
      class: '!col-span-2',
    },
  ],
};
