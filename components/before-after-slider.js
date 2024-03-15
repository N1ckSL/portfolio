import * as React from 'react'

const BeforeAfterSlider = () => {
  const [sliderPos, setSliderPos] = React.useState(0)

  function handleChange(e) {
    const newPosition = e.target.value
    setSliderPos(newPosition)
  }

  return (
    <div>
      <input
        type="range"
        id="slider"
        min="0"
        max="100"
        value={sliderPos}
        onChange={e => handleChange(e)}
      />
      <div
        className="absolute bg-[url('https://images.pexels.com/photos/20400720/pexels-photo-20400720/free-photo-of-a-beach-with-a-boat-on-the-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"
        style={{ width: `${sliderPos}%` }}
      />
      <div
        className="bg-[url('https://images.pexels.com/photos/20400720/pexels-photo-20400720/free-photo-of-a-beach-with-a-boat-on-the-shore-at-sunset.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')]"
        style={{ width: `${sliderPos}%` }}
      />
      <div
        className="slider-button"
        style={{ left: `calc(${sliderPos}% - 18px)` }}
      />
    </div>
  )
}

export default BeforeAfterSlider
