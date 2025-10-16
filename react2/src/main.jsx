import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Components/Home';
import Login from './Components/Login';
import Notfound from './Components/Notfound';
import Counter from './Components/Counter';
import Post from './Components/Post';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Notfound />
  },
  {
    path: "/login",
    element: <Login />
  }, {
    path: "/counter",
    element: <Counter />
  },{
    path: "/post/:id",
    element: <Post/>
  }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
