import Styles from './styles'
import data from '../../data/products.json'
import { useNavigate } from 'react-router-dom'

export function Products() {
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
          <p>
            {item.name} - {item.price.toFixed(2)}
          </p>
        </div>
      ))}
    </Styles.Container>
  )
}
