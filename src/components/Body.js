import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import MovieTrailerAndDetails from './MovieTrailerAndDetails'

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />,
    },
    {
      path: '/browse',
      element: <Browse />,
    },
  ])

  return (
    <div className="box-border">
      <RouterProvider router={appRouter} />
    </div>
  )
}

export default Body
