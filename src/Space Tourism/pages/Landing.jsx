import { useWindowSize } from "@react-hook/window-size"
import { useState,useEffect,useRef } from "react"
import { LandingText } from "../components"


const Landing = () => {
  const [img,setImg] = useState()
  const ref = useRef(null)
  const [width] = useWindowSize()

  useEffect(()=>{
    if (width >= 1114) {
      setImg('/assets/home/background-home-desktop.jpg')
    } else if (width >= 700){
      setImg('/assets/home/background-home-tablet.jpg')
    } else {
      setImg('/assets/home/background-home-mobile.jpg')
    }
  },[width])

  useEffect(()=>{
   ref.current.style.backgroundImage = `url(${img})`  
  },)
  return (
    <div className="h-[140vh] sm:h-[100vh]  bg-no-repeat bg-cover" ref={ref}>
      <LandingText />
    </div>
  )
}

export default Landing
