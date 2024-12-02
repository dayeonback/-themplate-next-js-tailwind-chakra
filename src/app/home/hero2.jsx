import { AspectRatio, Image } from '@chakra-ui/react';
import { Heading } from 'lucide-react';
import React from 'react';

const Hero2 = () => {
  return (
    <div className="py-[100px]">
      <Heading className="text-[17vw] text-center">think Great</Heading>
      <AspectRatio ratio={1 / 2}>
        <Image src="/images/pattern/main/intro1.avif" alt="dd" width={1300} height={1300} />
      </AspectRatio>
    </div>
  );
};

export default Hero2;
