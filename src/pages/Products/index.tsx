import Styles from './styles'
import data from '../../data/products.json'

export function Products() {
  return (
    <Styles.Container>
      {data.map((item, key) => (
        <div key={key} className="card-container">
          <img src={item.image.primary} alt="" width={300} height={350} />
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </Styles.Container>
  )
}
