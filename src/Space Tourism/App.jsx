import { createBrowserRouter, RouterProvider } from "react-router-dom"


import {
  Landing,
  Crew,
  Destination,
  HomeLayout,
  Technology
} from './pages';






const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'destination',
        element: <Destination />,
      },
      {
        path: 'crew',
        element: <Crew />,
      },
      {
        path: 'technology',
        element: <Technology />,
      },
    ],
  },
])
const App = () => {
  return (
    <div>
      <RouterProvider  router={router}/>
    </div>
  )
}

export default App
