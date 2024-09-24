import { useWindowSize } from '@react-hook/window-size'
import {crew} from '../data.json'
import { useState,useEffect} from 'react'

const CrewComp = () => {
  const [width] = useWindowSize()
  const[page,setPage] = useState(0)
  const {name,images,role,bio} = crew[page]
  const [img,setImg] = useState()
   useEffect(() => {
     if (width >= 1114) {
       setImg(images.webp)
     } else if (width >= 700) {
       setImg(images.webp)
     } else {
       setImg(images.png)
     }
   }, [width, page])
   const HandleFirstPage = ()=>{
    setPage(0)
   }
   const HandleSecondPage = () => {
     setPage(1)
   }
   const HandleThirdPage = () => {
     setPage(2)
   }
   const HandleLastPage = () => {
     setPage(3)
   }
  return (
    <div className="pt-[8rem]  lg:pt-[16%] ">
      <h3 className="text-white uppercase align-element text-[1.5rem] sm:text-[1.5rem]">
        <span className="pr-2 text-slate-700 font-bold">02</span> MEET YOUR CREW
      </h3>
      <div className=" align-element grid  items-center gap-8 mt-20 justify-center lg:flex justify-between lg:mt-0">
        <div>
          <div className="grid  text-center lg:text-left">
            <div className="lg:w-[30rem]">
              <h2 className="uppercase text-[3rem]">{role}</h2>
              <h3 className="text-white uppercase text-[2rem]">{name}</h3>
              <p className="text-white text-[1.3rem]">{bio}</p>
            </div>
            <div className="flex justify-center lg:justify-start gap-4 mt-10">
              <button
                className={`"border border-slate-800 ${
                  page === 0
                    ? 'bg-white h-4 w-4 rounded-full '
                    : 'bg-[#34373e] h-4 w-4 rounded-full '
                } " `}
                onClick={() => HandleFirstPage()}
              ></button>
              <button
                className={`"border border-slate-800 ${
                  page === 1
                    ? 'bg-white h-4 w-4 rounded-full '
                    : 'bg-[#34373e] h-4 w-4 rounded-full '
                } " `}
                onClick={() => HandleSecondPage()}
              ></button>
              <button
                className={`"border border-slate-800 ${
                  page === 2
                    ? 'bg-white h-4 w-4 rounded-full '
                    : 'bg-[#34373e] h-4 w-4 rounded-full '
                } " `}
                onClick={() => HandleThirdPage()}
              ></button>
              <button
                className={`"border border-slate-800 ${
                  page === 3
                    ? 'bg-white h-4 w-4 rounded-full '
                    : 'bg-[#34373e] h-4 w-4 rounded-full '
                } " `}
                onClick={() => HandleLastPage()}
              ></button>
            </div>
          </div>
        </div>
        <div>
          <div className="grid justify-center">
            <img src={img} alt={name}  />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CrewComp
