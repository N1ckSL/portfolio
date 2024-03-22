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
    <div id="cards">
      <div
        ref={cardsRef}
        onMouseMove={handleMouseMove}
        className={`card relative overflow-hidden p-6 rounded-lg mt-10 md:flex gap-6
        after:hover:opacity-100 after:w-full after:h-full after:left-0 after:top-0 after:opacity-0
        after:content-[''] after:absolute after:transition-all after:duration-500 after:-z-10
       ${
         colorMode === 'dark'
           ? 'bg-[#ffffff05] after:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(251,211,141,0.1),transparent_95%)]'
           : 'bg-[#00000010] after:bg-[radial-gradient(400px_circle_at_var(--mouse-x)_var(--mouse-y),rgba(128,89,213,0.2),transparent_95%)]'
       }
       ${direction === 'reverse' ? ' flex-row-reverse' : ''}
       `}
      >
        {/* <div className="card-content"> */}
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
        {/* </div> */}
      </div>
    </div>
  )
}

export default PostCard
