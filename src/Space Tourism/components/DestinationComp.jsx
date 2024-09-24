import { useEffect, useState } from 'react'
import { destinations } from '../data.json'
import { useWindowSize } from '@react-hook/window-size'

const DestinationComp = () => {
  const [width] = useWindowSize()
  const [next, setNext] = useState(0)
  const { name, images, description, distance, travel } = destinations[next]
  const [img, setImg] = useState()
  useEffect(() => {
    if (width >= 1114) {
      setImg(images.webp)
    } else if (width >= 700) {
      setImg(images.webp)
    } else {
      setImg(images.png)
    }
  }, [width, next])

  const handleClick = (index) => {
    setNext(index)
  }
  return (
    <div className="pt-[9rem] lg:pt-[16%]">
      <h3 className="text-white uppercase align-element text-[1.5rem] sm:text-[2rem]">
        <span className="pr-2 text-slate-700 font-bold">01</span> Pick your
        destination
      </h3>
      <div className="align-element grid justify-center items-center mt-10 lg:flex justify-between lg:mt-0">
        <div>
          <div className=" grid justify-center  m-auto">
            <img src={img} alt={name} className=" pt-4 lg:mt-4  xl:mt-8" />
          </div>
        </div>
        <div>
          <div className="flex justify-center gap-2 mt-8 lg:justify-start lg:mt-0">
            {destinations.map((i, index) => {
              const { name } = i
              return (
                <div
                  key={index}
                  className="inline-flex  pr-4 text-white cursor-pointer mb-6  hover:underline underline-offset-[23px]"
                >
                  <button
                    onClick={() => handleClick(index)}
                    className={index === next && 'underline'}
                  >
                    <p className="uppercase">{name}</p>
                  </button>
                </div>
              )
            })}
          </div>
          <div>
            <div className="grid justify-center items-center m-auto">
              <h3 className="text-white text-[4rem] sm:text-[6rem] uppercase font-['Bellefair'] text-center  lg:text-left  ">
                {name}
              </h3>
              <p className="text-[#bec4e5] font-['Barlow Condensed'] text-center  lg:w-[29rem] xl:w-[28rem] text-[1.2rem] sm:text-center lg:text-left lg:ml-0">
                {description}
              </p>
              <div className="border-b border-b-slate-800 mt-16"></div>

              <div className="flex justify-between mt-6 ">
                <div className="text-white uppercase">
                  <h2>Avg. distance</h2>
                  <p className="sm:text-[2rem]">{distance}</p>
                </div>
                <div className="text-white uppercase">
                  <h3>Est. travel time</h3>
                  <p className="sm:text-[2rem] pb-8 lg:pb-0"> {travel}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DestinationComp
