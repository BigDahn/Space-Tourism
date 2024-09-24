import { NavLink } from 'react-router-dom'
import Sidebar from './Sidebar'
import { useState } from 'react'

const Navbar = () => {
  const links = [
    { id: 1, url: '/', text: '00 HOME' },
    { id: 2, url: 'destination', text: ' 01 DESTINATION' },
    { id: 3, url: 'crew', text: '02 CREW' },
    { id: 4, url: 'technology', text: '03 TECHNOLOGY' },
  ]
  const [openSidebar, setOpenSidebar] = useState(false)
  return (
    <header className=" ml-4  md:ml-16 lg:ml-10 xl:ml-10 ">
      <nav className="  flex justify-between gap-[17rem] sm:gap-[600px] md:gap-20 lg:gap-[24rem] xl:gap-[18rem]">
        <div className=" mt-5 md:mt-2 lg:mt-3">
          <img src="/assets/shared/logo.svg" alt="logo" />
        </div>
        <div className="hidden border-t-2 border-[#fff] opacity-25 mix-blend-normal w-[38%] absolute top-[51.3%] left-[9%] z-10   xl:flex"></div>
        <ul className="hidden xl:pl-40 xl:pr-40 lg:pr-32 pt-5 pb-5  md:flex justify-center gap-[40px]  pl-10 pr-10 items-center bg-black-rgba backdrop-blur-[4.07742rem] border-none rounded-sm text-white font-['Barlow Condensed']  mt-[2px] lg:ml-20 md:ml-32 xl:ml-[10rem]">
          {links.map((link) => {
            const { id, url, text } = link
            return (
              <li key={id}>
                <NavLink
                  className="capitalize"
                  to={url}
                  style={({ isActive }) => {
                    return {
                      textDecoration: isActive ? 'underline' : '',
                      textUnderlineOffset: isActive ? '23px' : '',
                      textDecorationThickness: isActive ? '3px' : '',
                    }
                  }}
                >
                  <p className="hover:underline decoration-2 underline-offset-[23px] ">
                    {text}
                  </p>
                </NavLink>
              </li>
            )
          })}
        </ul>

        {openSidebar ? null : (
          <button
            className=" mr-3 mt-5 md:hidden"
            onClick={() => setOpenSidebar(true)}
          >
            <img
              src="/assets/shared/icon-hamburger.svg"
              alt="hamburger"
              width="40px"
            />
          </button>
        )}
      </nav>
      {openSidebar && (
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} />
      )}
    </header>
  )
}

export default Navbar
