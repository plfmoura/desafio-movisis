import { useEffect, useState } from 'react'
import Styles from './styles'
import { useParams } from 'react-router-dom'
import data from '../../data/products.json'
import { Product } from '../../contexts/CartContext'

export default function ProductDetails() {
  const [product, setProduct] = useState<Product | undefined>(undefined)

  const { productId } = useParams()

  useEffect(() => {
    const selectedProduct = data.find((item) => item.id === productId)
    setProduct(selectedProduct)
  }, [productId])

  return (
    <Styles.ProductContainer>
      {product ? <h1>{product.id}</h1> : <h1>carregando...</h1>}
    </Styles.ProductContainer>
  )
}
