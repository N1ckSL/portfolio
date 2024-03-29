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
  const cardsRef = React.useRef(null)

  const handleMouseMove = e => {
    for (const card of document.getElementsByClassName('card')) {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      card.style.setProperty('--mouse-x', `${x}px`)
      card.style.setProperty('--mouse-y', `${y}px`)
    }
  }

  return (
    <div
      ref={cardsRef}
      onMouseMove={handleMouseMove}
      className={`card relative w-full md:h-[31rem] h-[50rem] flex rounded-[10px] overflow-hidden p-6 rounded-lg mt-10
        after:hover:opacity-100 after:w-full after:h-full after:left-0 after:top-0 after:opacity-0
        after:content-[''] after:absolute after:transition-all after:duration-500 after:-z-10
        before:hover:opacity-100
       ${
         colorMode === 'dark'
           ? 'bg-[rgba(255,255,255,0.1)] after:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(251,211,141,0.1),transparent_95%)]'
           : 'bg-[rgba(255,255,255,0.1)] after:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(128,89,213,0.2),transparent_95%)]'
       }
       `}
    >
      <div
        className={`card-content md:flex absolute inset-[1px] rounded-[inherit] gap-6 p-6 
         ${direction === 'reverse' ? ' flex-row-reverse' : ''}
         ${colorMode === 'dark' ? 'bg-black/40' : 'bg-[#00000010]'}
        
        `}
      >
        <Center w="100%" position="relative" zIndex={20}>
          <ImgComparisonSlider
            value={imageSliderValue ?? 66}
            style={{
              outline: 'none',
              transition: 'box-shadow 0.3s ease',
              borderRadius: '6px',
              backgroundColor: 'black',
              position: 'relative'
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
          <Text color={colorMode === 'dark' ? 'white' : 'black'}>
            {children}
          </Text>
        </Box>
      </div>
    </div>
  )
}

export default PostCard
