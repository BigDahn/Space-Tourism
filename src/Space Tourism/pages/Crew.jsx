import { useWindowSize } from '@react-hook/window-size'
import { useState, useEffect, useRef } from 'react'
import { CrewComp } from '../components'

const Crew = () => {
  const [img, setImg] = useState()
  const ref = useRef(null)
  const [width] = useWindowSize()

  useEffect(() => {
    if (width >= 1114) {
      setImg('/assets/crew/background-crew-desktop.jpg')
    } else if (width >= 700) {
      setImg('/assets/crew/background-crew-tablet.jpg')
    } else {
      setImg('/assets/crew/background-crew-mobile.jpg')
    }
  }, [width])

  useEffect(() => {
    ref.current.style.backgroundImage = `url(${img})`
  })
  return <div className="h-[70rem] sm:h-[130vh] md:h-[130vh] lg:h-full xl:h-[143vh]  bg-no-repeat bg-cover" ref={ref}>
    <CrewComp/>
  </div>
}

export default Crew
