import Styles from './styles'
import data from '../../data/products.json'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Product } from '../../contexts/CartContext'
import ProductCard from '../../components/ProductCard'
import ReactSlider from 'react-slider'

type PriceFilterProps = {
  lower: number
  highest: number
}

export function Products() {
  const { categoryId } = useParams()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [filteredPrice, setFilteredPrice] = useState<PriceFilterProps>({
    lower: 0,
    highest: 0,
  })
  const [rangeValue, setRangeValue] = useState<number[]>([
    filteredPrice.lower,
    filteredPrice.highest,
  ])

  const handleFilterByRouteParams = () => {
    if (categoryId !== 'all') {
      return setFilteredProducts(
        data.filter((item) => item.class === categoryId),
      )
    }
    setFilteredProducts(data)
    console.log(filteredProducts)
  }

  const handleFilterByPrice = () => {
    const filteredProductsByRange = filteredProducts.filter(
      (item) => item.price > rangeValue[0] && item.price < rangeValue[1],
    )
    console.log(filteredProductsByRange)
    setFilteredProducts(filteredProductsByRange)
  }

  useEffect(() => {
    handleFilterByRouteParams()
  }, [categoryId])

  useEffect(() => {
    if (filteredProducts.length > 0) {
      const highestPrice = filteredProducts.reduce((menor, atual) =>
        atual.price > menor.price ? atual : menor,
      ).price
      const lowerPrice = filteredProducts.reduce((menor, atual) =>
        atual.price < menor.price ? atual : menor,
      ).price

      setFilteredPrice({ lower: lowerPrice, highest: highestPrice })
      setRangeValue([lowerPrice, highestPrice])
    }
  }, [filteredProducts])

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Filter>
          <label>Filtrar por preço</label>
          <div className="range-values">
            <span>R$ {rangeValue[0].toFixed(2)}</span>
            <span>R$ {rangeValue[1].toFixed(2)}</span>
          </div>
          <ReactSlider
            className="range-slider"
            value={rangeValue}
            min={filteredPrice.lower}
            max={filteredPrice.highest}
            onChange={setRangeValue}
          />
          <div className="range-actions">
            <button onClick={handleFilterByPrice}>Filtrar</button>
            <button onClick={handleFilterByRouteParams}>Remover</button>
          </div>
        </Styles.Filter>
        <div className="align-products-cards">
          {filteredProducts.map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
        </div>
      </Styles.Content>
    </Styles.Container>
  )
}
