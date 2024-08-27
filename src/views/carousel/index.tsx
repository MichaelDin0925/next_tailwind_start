import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import CustomCarousel from '../../components/carousel/CustomCarousel';
// import 

interface Image {
  src: string;
  alt: string;
}

const images: Image[] = [
  { src: '/images/image1.png', alt: 'Image 1' },
  { src: '/images/image2.png', alt: 'Image 2' },
  { src: '/images/image3.png', alt: 'Image 3' },
];

const Carousel: React.FC = () => {
  return (
    <CustomCarousel images={images} />
  );
};

export default Carousel;