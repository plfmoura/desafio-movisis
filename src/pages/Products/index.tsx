import Styles from './styles'
import data from '../../data/products.json'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { Add, Remove } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

export function Products() {
  const { addCartProduct, removeCartProduct } = useContext(CartContext)
  const navigate = useNavigate()

  return (
    <Styles.Container>
      {data.map((item) => (
        <div
          key={item.id}
          className="card-container"
          onClick={() => navigate(`/product/${item.id}`)}
        >
          <img src={item.image[0]} alt={item.name} width={300} height={350} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              className="actions-container"
              style={{ display: 'flex', gap: 10 }}
            >
              <button onClick={() => addCartProduct(item.id)}>
                <Add />
              </button>
              <button onClick={() => removeCartProduct(item.id)}>
                <Remove />
              </button>
            </div>
            <p>
              {item.name} - {item.price.toFixed(2)}
            </p>
          </div>
        </div>
      ))}
    </Styles.Container>
  )
}
