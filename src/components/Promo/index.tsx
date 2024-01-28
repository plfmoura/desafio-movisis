import { useNavigate } from 'react-router-dom'
import data from '../../data/products.json'

import Styles from './styles'

export default function Promo() {
  const navigate = useNavigate()

  return (
    <Styles.PromoContainer>
      <h2>See more products</h2>
      <div className="align-promo-cards">
        {data.slice(0, 5).map((item) => (
          <div
            className="promo-card-container"
            key={item.id}
            onClick={() => navigate(`/product/${item.id}`)}
          >
            <img src={item.image[0]} alt="promo product image" />
            <div>
              <p>{item.name}</p>
              <p>{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </Styles.PromoContainer>
  )
}
