import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router =createBrowserRouter([
  {
    path: '/',
    element: <div>Hello Router bajan</div>
  },
  {
    path: '/about',
    element: <div>this is my about section </div>

  },
  {
    path: '/contact',
    element: <div>Plx contact me for more detiles</div>
  },
  {
    path: '/follow',
    element: <div>Linkedin facebook instargram x</div>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <App />
  </StrictMode>,
)
