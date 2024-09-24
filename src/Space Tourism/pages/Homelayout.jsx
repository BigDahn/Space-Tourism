import { Outlet } from "react-router-dom"
import { Navbar } from "../components"



const Homelayout = () => {
  return (
    <div>
      <div className="absolute bottom-[91%]  md:bottom-[93%] lg:bottom-[86%]">
        <Navbar />
      </div>
      <section>
        <Outlet />
      </section>
    </div>
  )
}

export default Homelayout
