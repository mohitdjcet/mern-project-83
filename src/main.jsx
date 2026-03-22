import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Users from './pages/Users.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,// "/"
    children:[
      {index:true, element:<Home />}, // "/"
      {path:"about", element:<About />},
      {path:"users", element:<Users />}
    ]
  }
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
