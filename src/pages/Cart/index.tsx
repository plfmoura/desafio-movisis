import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartCard from '../../components/CartCard'

import Styles from './styles'
import { Close, Label, Lock } from '@mui/icons-material'

export function Cart() {
  const { products, clearCart, amount } = useContext(CartContext)
  const [coupon, setCoupon] = useState({ code: '', discount: 0 })

  const uniqueProductMap = new Map()

  products.forEach((product) => {
    uniqueProductMap.set(product.id, product)
  })

  const uniqueProductsArray = Array.from(uniqueProductMap.values())

  return (
    <Styles.CartContainer>
      {products.length > 0 ? (
        <section className="align-cart-content">
          <Styles.CartContent>
            <div className="cart-content-header">
              <h3>Cart</h3>
              <button onClick={clearCart}>Remove All</button>
            </div>
            <div className="align-cards-container">
              {uniqueProductsArray.length > 0 &&
                uniqueProductsArray.map((item, key) => (
                  <CartCard key={key} data={item} />
                ))}
            </div>
          </Styles.CartContent>
          <div className="pricing-container">
            <Styles.DiscountContent>
              <h3>Discount Code</h3>
              {coupon.code === '' ? (
                <div>
                  <Label />
                  <input type="text" placeholder="insert coupon" />
                  <button
                    onClick={() =>
                      setCoupon({ code: 'MEUCUPOM', discount: 10 })
                    }
                  >
                    check
                  </button>
                </div>
              ) : (
                <div>
                  <Label />
                  <span>{coupon.code}</span>
                  <span className="discount-green-overlay">
                    {coupon.discount}%OFF
                  </span>
                  <button onClick={() => setCoupon({ code: '', discount: 0 })}>
                    <Close />
                  </button>
                </div>
              )}
            </Styles.DiscountContent>
            <Styles.PricingContent>
              <h3>Pricing Details</h3>
              <div className="align-price-feedback">
                {coupon.code !== '' && (
                  <div>
                    <p>Discount</p>
                    <p>${((amount * coupon.discount) / 100).toFixed(2)}</p>
                  </div>
                )}
                <div>
                  <p>Total</p>
                  <p>
                    ${(amount - (amount * coupon.discount) / 100).toFixed(2)}
                  </p>
                </div>
              </div>
              <button>
                <Lock fontSize="small" /> Place Order
              </button>
            </Styles.PricingContent>
          </div>
        </section>
      ) : (
        <span>cart empty</span>
      )}
    </Styles.CartContainer>
  )
}
