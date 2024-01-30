import data from '../../data/products.json'
import Grid from '../../components/Grid'

import Styles from './styles'
import { useNavigate } from 'react-router-dom'

export function Home() {
  const navigate = useNavigate()
  const filteredProducts = data.filter((item) => item.rating > 4.8)

  return (
    <Styles.Container>
      <Grid />
      <h2 className="title-home-products">Produtos em destaque</h2>
      <section className="align-home-products">
        {filteredProducts.map((item) => (
          <div
            key={item.id}
            className="card-container"
            onClick={() => navigate(`/products/details/${item.id}`)}
          >
            <img src={item.image[0]} alt={item.name} width={300} height={350} />
            <p>
              {item.name} - {item.price.toFixed(2)}
            </p>
          </div>
        ))}
      </section>
    </Styles.Container>
  )
}
