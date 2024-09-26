

const LandingText = () => {
  return (
    <div className="pt-[9rem] sm:pt-[14.6rem] md:pt-[16rem] lg:pt-[16%]">
      <div className="grid justify-center items-center m-auto lg:flex lg:justify-between ">
        <div className="align-element text-center text-white lg:w-[50%] lg:ml-24 xl:ml-32 xl:mt-10 md:text-center lg:text-left text-center">
          <h3 className="text-[20px] uppercase sm:text-[30px]">
            So, you want to travel to
          </h3>
          <span className="text-[5rem] sm:text-[9rem] font-['Bellefair'] uppercase font-normal">
            Space
          </span>
          <h6 className=" lg:w-[26rem] text-[20px]  lg:ml-0 ">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </h6>
        </div>
        <div className="align-element ">
          <div className="before:absolute before:content-['']  before:transition-all before:block hover:before:rounded-[999px] hover:before:bg-[#ffffff21] hover:before:w-[18rem] hover:before:h-[18rem] hover:before:absolute hover:before:content-[''] hover:before:top-[-3rem] hover:before:transition hover:before:duration-600  hover:before:ease-linear hover:before:delay-[300ms]  hover:before:left-[-3rem] rounded-[999px] relative top-8 right-[-2rem] h-[12rem] bg-white w-[12rem]  mt-[10%] mr-[4rem]  lg:mr-32 ">
            <h4 className="text-black relative top-[4.5rem] left-[3rem] uppercase text-[2rem] cursor-pointer">
              explore
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingText
