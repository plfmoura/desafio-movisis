import { Route, Routes, useLocation } from 'react-router-dom'
import { Home } from './pages/Home'
import { Cart } from './pages/Cart'
import Header from './components/Header'
import { Products } from './pages/Products'
import Hero from './components/Hero'
import ProductDetails from './pages/ProductDetails'

export function Router() {
  const location = useLocation()
  const showHeroComponent = ['/', '/about']

  return (
    <>
      <Header />
      {showHeroComponent.includes(location.pathname) && <Hero />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </>
  )
}
