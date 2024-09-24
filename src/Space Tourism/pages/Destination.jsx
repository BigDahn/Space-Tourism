import { useWindowSize } from '@react-hook/window-size'
import { useState, useEffect, useRef } from 'react'
import { DestinationComp } from '../components'


const Destination = () => {
  const [img, setImg] = useState()
  const ref = useRef(null)
  const [width] = useWindowSize()

  useEffect(() => {
    if (width >= 1114) {
      setImg('/assets/destination/background-destination-desktop.jpg')
    } else if (width >= 700) {
      setImg('/assets/destination/background-destination-tablet.jpg')
    } else {
      setImg('/assets/destination/background-destination-mobile.jpg')
    }
  }, [width])

  useEffect(() => {
    ref.current.style.backgroundImage = `url(${img})`
  })
  return (
    <div
      className="h-full sm:h-full md:h-full lg:h-full xl:h-[120vh] bg-no-repeat bg-cover"
      ref={ref}
    >
      <DestinationComp />
    </div>
  )
}

export default Destination
