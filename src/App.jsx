import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements, useLocation } from 'react-router-dom'
import Layout from './components/layout/layout'
import Profile from './pages/profile/Profile'
import Order from './pages/order/Order'
import User from './pages/user/User'
import Products from './pages/products/Products'
import Dashboard from './pages/daschboard/Dashboard'


const App = () => {

  const ScrollToTop = () => {
    useEffect(() => {
      window.scrollTo(0, 0); // Scrolls to the top of the page
    }, []);

    return null; // Doesn't render anything, just performs the scroll
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Dashboard />} />
        <Route path='profile' element={<Profile />} />
        <Route path='order' element={<Order />} />
        <Route path='products' element={<Products />} />
        <Route path='user' element={<User />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App