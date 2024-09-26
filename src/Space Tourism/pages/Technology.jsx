import { useWindowSize } from '@react-hook/window-size'
import { useState, useEffect, useRef } from 'react'
import { TechComp } from '../components'

const Technology = () => {
  const [img, setImg] = useState()
  const ref = useRef(null)
  const [width] = useWindowSize()

  const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 2000)
  })

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
  return (
    <div
      className="h-[120vh] sm:h-[123vh] md:h-[100vh] lg:h-[115vh] xl:h-[125vh]  bg-no-repeat bg-cover"
      ref={ref}
    >
      {loading ? (
        <div>
          <div className="h-screen flex items-center justify-center">
            <div className="grid gap-2">
              <div>
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff"
                  className="h-10 w-10 animate-spin mr-auto ml-auto inline bg-transparent"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <g fill="#ffffff" fillRule="evenodd" clipRule="evenodd">
                      <path
                        d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8z"
                        opacity=".2"
                      ></path>
                      <path d="M7.25.75A.75.75 0 018 0a8 8 0 018 8 .75.75 0 01-1.5 0A6.5 6.5 0 008 1.5a.75.75 0 01-.75-.75z"></path>
                    </g>
                  </g>
                </svg>
              </div>
              <div>
                <p className="text-white uppercase">loading....</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <TechComp />
      )}
    </div>
  )
}

export default Technology
