import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartCard from '../../components/CartCard'

import Styles from './styles'
import { Close, Label, Lock } from '@mui/icons-material'
import Promo from '../../components/Promo'

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
              <h3>Carrinho</h3>
              <button onClick={clearCart}>Remover todos</button>
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
              <h3>Cupom</h3>
              {coupon.code === '' ? (
                <div>
                  <Label />
                  <input type="text" placeholder="insira seu cupom" />
                  <button
                    onClick={() =>
                      setCoupon({ code: 'MOVISIS#30', discount: 30 })
                    }
                  >
                    Verificar
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
              <h3>Valor</h3>
              <div className="align-price-feedback">
                {coupon.code !== '' && (
                  <div>
                    <p>Discount</p>
                    <p className="price-discount-value">
                      ${((amount * coupon.discount) / 100).toFixed(2)}
                    </p>
                  </div>
                )}
                <div>
                  <p>Total</p>
                  <p className="price-total-value">
                    ${(amount - (amount * coupon.discount) / 100).toFixed(2)}
                  </p>
                </div>
              </div>
              <button>
                <Lock fontSize="small" /> Ir para pagamento
              </button>
            </Styles.PricingContent>
          </div>
        </section>
      ) : (
        <section className="align-empty-content">
          <span>Carrinho de compras vazio</span>
        </section>
      )}
      <Promo />
    </Styles.CartContainer>
  )
}
