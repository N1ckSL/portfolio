import * as React from 'react'
import { Box, Center, Image, Text, useColorMode } from '@chakra-ui/react'
import { ImgComparisonSlider } from '@img-comparison-slider/react'
const PostCard = ({
  direction,
  imageSliderValue,
  title,
  children,
  firstImage,
  secondImage
}) => {
  const { colorMode } = useColorMode()

  return (
    <div
      className={`relative overflow-hidden p-6 rounded-lg mt-10 md:flex gap-6 before:hover:opacity-100 before:transition-all before:duration-300 before:opacity-0 before:absolute before:pointer-events-none before:-z-10 before:bottom-0 before:w-1/2 before:h-full before:to-transparent before:via-transparent before:from-[1%] before:to-[80%] 
       ${
         colorMode === 'dark'
           ? 'bg-[#ffffff05] before:from-[#FBD18A2C]'
           : 'bg-[#00000010] before:from-[#805AD52C]'
       }
       ${
         direction === 'reverse'
           ? 'before:left-0 before:bg-gradient-to-tr flex-row-reverse'
           : 'before:right-0 before:bg-gradient-to-tl'
       }
       `}
    >
      <Center w="100%">
        <ImgComparisonSlider
          value={imageSliderValue ?? 66}
          style={{
            outline: 'none',
            transition: 'box-shadow 0.3s ease',
            borderRadius: '6px',
            backgroundColor: 'black'
          }}
        >
          <Image slot="first" src={firstImage} />
          <Image slot="second" src={secondImage} />
        </ImgComparisonSlider>
      </Center>
      <Box w={{ base: '100%', md: '45%' }}>
        <Text
          mb={2}
          mt={{ base: 4, md: '0' }}
          fontSize="lg"
          color={colorMode === 'dark' ? '#FBD38D' : '#8059D5'}
        >
          {title}
        </Text>
        <Text>{children}</Text>
      </Box>
    </div>
  )
}

export default PostCard
