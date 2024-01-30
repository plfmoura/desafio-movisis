import Styles from './styles'
import data from '../../data/products.json'
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Product } from '../../contexts/CartContext'

export function Products() {
  const { categoryId } = useParams()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    if (categoryId !== 'all') {
      return setFilteredProducts(
        data.filter((item) => item.class === categoryId),
      )
    }
    setFilteredProducts(data)
  }, [categoryId])

  return (
    <Styles.Container>
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
    </Styles.Container>
  )
}
