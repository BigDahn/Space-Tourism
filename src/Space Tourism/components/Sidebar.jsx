import { NavLink } from 'react-router-dom'

const Sidebar = ({setOpenSidebar,openSidebar}) => {
  const links = [
    { id: 1, url: '/', text: '00 HOME' },
    { id: 2, url: 'destination', text: ' 01 DESTINATION' },
    { id: 3, url: 'crew', text: '02 CREW' },
    { id: 4, url: 'technology', text: '03 TECHNOLOGY' },
  ]
  return (
    <div
      className={
        openSidebar
          ? ' bg-black-norm h-full w-[68%] overflow-x-hidden fixed top-0 right-0 z-50 backdrop-blur-xl backdrop-filter  md:hidden '
          : ' bg-black-norm h-full w-[68%] overflow-x-hidden fixed top-0 right-0 z-50 backdrop-blur-xl backdrop-filter md:hidden '
      }
    >
      <button
        className="relative top-[2rem] left-[80%] sm:left-[30rem]"
        onClick={() => setOpenSidebar(false)}
      >
        <img src="/public/assets/shared/icon-close.svg" alt="" />
      </button>
      <div>
        <ul className="grid gap-8 justify-center mt-40 rounded-sm text-white font-['Barlow Condensed'] ">
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
                      textUnderlineOffset: isActive ? '10px' : '',
                      textDecorationThickness: isActive ? '3px' : '',
                    }
                  }}
                >
                  <p className="  hover:underline decoration-2 underline-offset-[10px] ">
                    {text}
                  </p>
                </NavLink>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
