import { useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import CartCard from '../../components/CartCard'
import { Close, Label, Lock } from '@mui/icons-material'
import Promo from '../../components/Promo'
import { useNavigate } from 'react-router-dom'

import Styles from './styles'

export function Cart() {
  const { products, clearCart, amount } = useContext(CartContext)
  const [coupon, setCoupon] = useState({ code: '', discount: 0 })
  const [status, setStatus] = useState('Carrinho de compras vazio')
  const navigate = useNavigate()

  const uniqueProductMap = new Map()

  products.forEach((product) => {
    uniqueProductMap.set(product.id, product)
  })

  const uniqueProductsArray = Array.from(uniqueProductMap.values())

  const handlePurchaseEnd = () => {
    const history = localStorage.getItem('purchase')

    const purchase = {
      data: products,
      price: (amount - (amount * coupon.discount) / 100).toFixed(2),
      createdAt: new Date().toLocaleDateString(),
    }

    if (!history) {
      localStorage.setItem('purchase', JSON.stringify([purchase]))
      clearCart()
      setStatus('Compra efetuada com sucesso!')
      setTimeout(() => {
        setStatus('Carrinho de compras vazio')
        navigate('/')
      }, 3000)
      return
    }

    if (history) {
      const purchasesHistory = JSON.parse(history)
      purchasesHistory.push(purchase)
      localStorage.setItem('purchase', JSON.stringify(purchasesHistory))
      clearCart()
      setStatus('Compra efetuada com sucesso!')
      setTimeout(() => {
        setStatus('Carrinho de compras vazio')
        navigate('/')
      }, 3000)
    }
  }

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
                    <p>Desconto</p>
                    <p className="price-discount-value">
                      R$ {((amount * coupon.discount) / 100).toFixed(2)}
                    </p>
                  </div>
                )}
                <div>
                  <p>Total</p>
                  <p className="price-total-value">
                    R$ {(amount - (amount * coupon.discount) / 100).toFixed(2)}
                  </p>
                </div>
              </div>
              <button onClick={handlePurchaseEnd}>
                <Lock fontSize="small" /> FINALIZAR COMPRA
              </button>
            </Styles.PricingContent>
          </div>
        </section>
      ) : (
        <section className="align-empty-content">
          <h3>{status}</h3>
        </section>
      )}
      <Promo />
    </Styles.CartContainer>
  )
}
