import React from 'react';
import ProgressiveImage from 'react-progressive-image';
import { Image } from '@chakra-ui/react';

type LazyImageProps = {
  src: string;
  size?: string;
  width?: number;
  height?: number;
  layout?: string;
  rounded?: string;
};

const LazyImage = (props: LazyImageProps) => {
  const { src, width, height, size, layout, rounded } = props;

  return (
    // @ts-ignore
    <ProgressiveImage
      delay={500}
      src={src}
      placeholder='/images/placeholder.webp'
    >
      {(src) => {
        return (
          <Image
            src={src}
            objectFit='cover'
            alt='cover image'
            width={width}
            height={height}
            // @ts-ignore
            size={size}
            layout={layout}
            rounded={rounded}
            fallbackSrc='/images/placeholder.webp'
          />
        );
      }}
    </ProgressiveImage>
  );
};

export default LazyImage;
