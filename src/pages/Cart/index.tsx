import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartCard from '../../components/CartCard'

import Styles from './styles'

export function Cart() {
  const { products } = useContext(CartContext)

  const uniqueProductMap = new Map()

  products.forEach((product) => {
    uniqueProductMap.set(product.id, product)
  })

  const uniqueProductsArray = Array.from(uniqueProductMap.values())

  return (
    <Styles.CartContainer>
      <section className="align-cart-content">
        <Styles.CartContent>
          <h3>Cart</h3>
          <div className="align-cards-container">
            {uniqueProductsArray.length > 0 ? (
              uniqueProductsArray.map((item, key) => (
                <CartCard key={key} data={item} />
              ))
            ) : (
              <span>Your cart&apos;s empty</span>
            )}
          </div>
        </Styles.CartContent>
        <div>
          <h3>Discount code</h3>
        </div>
      </section>
    </Styles.CartContainer>
  )
}
