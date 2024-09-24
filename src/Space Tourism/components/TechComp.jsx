import { useWindowSize } from '@react-hook/window-size'
import { technology } from '../data.json'
import { useState, useEffect } from 'react'

const TechComp = () => {
  const [width] = useWindowSize()
  const [page, setPage] = useState(0)
  const {name,images,description} = technology[page]
  const [img, setImg] = useState()
  useEffect(() => {
    if (width >= 1114) {
      setImg(images.portrait)
    } else if (width >= 700) {
      setImg(images.landscape)
    } else {
      setImg(images.landscape)
    }
  }, [width, page])
  const HandleFirstPage = () => {
    setPage(0)
  }
  const HandleSecondPage = () => {
    setPage(1)
  }
  const HandleLastPage = () => {
    setPage(2)
  }
  return (
    <div className=" pt-[9rem] lg:pt-[16%]">
      <h3 className="text-white align-element uppercase  text-[1.5rem] sm:text-[1.5rem]">
        <span className="pr-2 text-slate-700 font-bold">03</span> Space launch
        101
      </h3>
      <div className="grid mt-20 lg:flex justify-between lg:mt-3 xl:mt-10">
        <div className=" lg:ml-20 lg:mt-10 xl:mt-0">
          <div className="grid gap-4 lg:flex lg:gap-6">
            <div className="flex gap-4 order-last justify-center lg:grid lg:order-first">
              <button
                className={`border border-slate-800 rounded-full h-16 w-16 ${
                  page === 0 && 'bg-white'
                } hover:border-white`}
                onClick={() => HandleFirstPage()}
              >
                <span
                  className={`font-['Bellefair'] text-[1.5rem] font-bold ${
                    page === 0 ? 'text-black' : 'text-white'
                  }`}
                >
                  1
                </span>
              </button>
              <button
                className={`border border-slate-800 rounded-full h-16 w-16 ${
                  page === 1 && 'bg-white'
                } hover:border-white`}
                onClick={() => HandleSecondPage()}
              >
                <span
                  className={`font-['Bellefair'] text-[1.5rem] font-bold ${
                    page === 1 ? 'text-black' : 'text-white'
                  }`}
                >
                  2
                </span>
              </button>
              <button
                className={`border border-slate-800 rounded-full h-16 w-16 ${
                  page === 2 && 'bg-white'
                } hover:border-white`}
                onClick={() => HandleLastPage()}
              >
                <span
                  className={`font-['Bellefair'] text-[1.5rem] font-bold ${
                    page === 2 ? 'text-black' : 'text-white'
                  }`}
                >
                  3
                </span>
              </button>
            </div>
            <div className="align-element grid justify-center text-center mt-8 lg:text-left lg:mt-0">
              <h4 className="text-white uppercase text-[1rem]">
                The terminology...
              </h4>
              <div>
                <h2 className="uppercase text-white text-[2rem] sm:text-[3rem] lg:text-[2rem] xl:text-[3rem] font-['Bellefair']">
                  {name}
                </h2>
                <p className="  sm:text-[1.4rem] md:text-[1.4rem] lg:text-[1rem] xl:text-[1.4rem]  lg:w-[20rem] xl:w-[30rem]  ">
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="order-first lg:order-last md:align-element ">
          <img src={img} alt={name} />
        </div>
      </div>
    </div>
  )
}

export default TechComp
