import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.jsx'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router'
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Users from './pages/Users.jsx'
import Products from './pages/Products.jsx'
import Login from './pages/Login.jsx'
import NotFound from './pages/NotFound.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,// "/"
    children:[
      {index:true, element:<Home />}, // "/"
      {path:"about", element:<Navigate to = "/" replace />},
      {path:"users/:id", element:<Users />},
      {path:"login", element:<Login />},
      {path:"products/:productId", element:<Products />},
      {path:"*", element:<NotFound/>}
    ]
  }
])

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
