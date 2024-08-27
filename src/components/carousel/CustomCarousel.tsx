import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import { useRouter } from 'next/router';
import { styled } from "@mui/system";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import React from "react";
import { Button } from '@mui/material';

import styles from "./CustomCarousel.module.css";
import RoundedTextField from "./RoundedTextField";
import CalendarButton from './CalendarButton';
import Image from "next/image";

// Define the type for the image object
interface Image {
  src: string;
  alt: string;
}

// Define the props interface for CustomCarousel
interface CustomCarouselProps {
  images: Image[];
}

// Styled components
const IconPrev = styled(KeyboardArrowLeftRoundedIcon)({
  color: "black",
  fontSize: 30,
});

const IconNext = styled(KeyboardArrowRightRoundedIcon)({
  color: "black",
  fontSize: 30,
});

// Component definitio
const CustomCarousel: React.FC<CustomCarouselProps> = ({ images }) => {

  const router = useRouter();

  const handleClick = () => {
    router.push({
      pathname: '/launchpad',
    });
  };

  return (
    <div className={styles.carouselContainer}>
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={images.length}
        isIntrinsicHeight
      >
        <Slider>
          {images.map((image, index) => (
            <Slide key={index} index={index}>
              <Image src={image.src} width={1377} height={375} alt={image.alt} className={styles.image} />
            </Slide>
          ))}
        </Slider>
        <ButtonBack className={`${styles.buttonBack} ${styles.button}`}>
          <IconPrev />
        </ButtonBack>
        <ButtonNext className={`${styles.buttonNext} ${styles.button}`}>
          <IconNext />
        </ButtonNext>
      </CarouselProvider>

      <div className={styles.overlayImageContainer}>
        <Image
          src="/images/avatar1.png"
          alt="Overlay"
          className={styles.overlayImage}
          width={42}
          height={42}
        />
        <div className={styles.overlayText}>
          <span className={styles.overlayBigText}>The unwritten Odyssey</span>
          <br />
          <span className={styles.overlaySmallText}>by Aurther</span>
        </div>
      </div>

      <div className={styles.overlayTextField}>
        <RoundedTextField text="" />
      </div>

      <div className={styles.overlayButton}>
        <CalendarButton />
        <Button variant="contained"
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#fff', // Set the background color
            color: '#000', // Set the text color
            '&:hover': {
              backgroundColor: 'rgba(143, 140, 140, 0.8)', // Set the background color on hover
            },
            padding: '10px 30px 10px 30px',
            borderRadius: '7px',
          }}
          onClick={handleClick}
        > Go to Launchpad </Button>
      </div>
    </div>
  );
};

export default CustomCarousel;
