import { NavLink } from 'react-router-dom'

const Sidebar = ({openSidebar}) => {
  const links = [
    { id: 1, url: '/', text: '00 HOME' },
    { id: 2, url: 'destination', text: ' 01 DESTINATION' },
    { id: 3, url: 'crew', text: '02 CREW' },
    { id: 4, url: 'technology', text: '03 TECHNOLOGY' },
  ]
  return (
    <div
      className={` bg-black-norm h-full w-[68%]  fixed top-0 right-0 z-30 backdrop-blur-xl backdrop-filter ${openSidebar ? 'translate-x-0' :'translate-x-full'} ease-in-out delay-700 md:hidden`}
    >
      <div>
        <ul className="grid gap-8 justify-center mt-40 sm:mt-[50%] rounded-sm text-white font-['Barlow Condensed'] ">
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
                  <p className="hover:underline decoration-2 underline-offset-[10px] ">
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
