import { useWindowSize } from '@react-hook/window-size'
import { useState, useEffect, useRef } from 'react'
import { TechComp } from '../components'

const Technology = () => {
  const [img, setImg] = useState()
  const ref = useRef(null)
  const [width] = useWindowSize()

  useEffect(() => {
    if (width >= 1114) {
      setImg('/assets/technology/background-technology-desktop.jpg')
    } else if (width >= 700) {
      setImg('/assets/technology/background-technology-tablet.jpg')
    } else {
      setImg('/assets/technology/background-technology-mobile.jpg')
    }
  }, [width])

  useEffect(() => {
    ref.current.style.backgroundImage = `url(${img})`
  })
  return <div className="h-[120vh] sm:h-[123vh] md:h-[100vh] lg:h-[115vh] xl:h-[125vh]  bg-no-repeat bg-cover" ref={ref}>
    <TechComp/>
  </div>
}

export default Technology
