import { AnimatedTestimonials } from '@/components/ui/animated-testimonials';

export default function TestimonialSection() {
  const testimonials = [
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: 'ILS Hopspital',
      designation: 'Kolkata',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGWyOdwT7NXvI4rvhz_Ss57Q6LL-8RDG0MtQ&s',
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: 'Tufcon',
      designation: 'Pan India',
      src: 'https://5.imimg.com/data5/SELLER/Default/2025/2/487084354/ZN/BJ/RR/130707388/tufcon-tmt-bars-500x500.jpeg',
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: 'Himalaya Optical',
      designation: 'Kolkata',
      src: 'https://media.licdn.com/dms/image/v2/C560BAQECBxfNzL9m-A/company-logo_200_200/company-logo_200_200/0/1643007343898/himalaya_optical_logo?e=2147483647&v=beta&t=k0kAO_7PCCnAi7s4KFLXa573eTrUzONtLsIzG8xOIYM',
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: 'Vyana Wealth',
      designation: 'Pan India',
      src: 'https://content3.jdmagicbox.com/comp/kolkata/h4/033pxx33.xx33.141121180030.t8h4/catalogue/vyana-wealth-bhawanipur-kolkata-wealth-management-services-x3yxer642f.jpg',
    },
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: 'Alwan & Al Khait',
      designation: 'Dubai',
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3zSU05ZDdUzOT65Y20KjVoCT_2k4okz-V5OO42UFEAw&s',
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
