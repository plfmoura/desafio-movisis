import Styles from './styles'
import data from '../../data/products.json'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Product } from '../../contexts/CartContext'
import ProductCard from '../../components/ProductCard'

export function Products() {
  const { categoryId } = useParams()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

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
        <ProductCard data={item} key={item.id} />
      ))}
    </Styles.Container>
  )
}
