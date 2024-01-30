import data from '../../data/products.json'
import Grid from '../../components/Grid'

import Styles from './styles'
import ProductCard from '../../components/ProductCard'

export function Home() {
  const filteredProducts = data.filter((item) => item.rating > 4.8)

  return (
    <Styles.Container>
      <Grid />
      <h2 className="title-home-products">Produtos em destaque</h2>
      <section className="align-home-products">
        {filteredProducts.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </section>
    </Styles.Container>
  )
}
