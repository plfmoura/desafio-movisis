import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import Header from './components/Header'
import { Products } from './pages/Products'
import Hero from './components/Hero'

export function Router() {
  const location = useLocation()

  return (
    <>
      <Header />
      {location.pathname !== '/products' && <Hero />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}
