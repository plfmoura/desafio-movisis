import data from '../../data/products.json'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Product } from '../../contexts/CartContext'
import ProductCard from '../../components/ProductCard'
import { Close } from '@mui/icons-material'
import ReactSlider from 'react-slider'

import Styles from './styles'

const MIN = 50
const MAX = 1000

export function Products() {
  const { categoryId } = useParams()
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])

  const [rangeValue, setRangeValue] = useState<number[]>([MIN, MAX])

  const handleFilterByRouteParams = () => {
    if (categoryId !== 'all') {
      return setFilteredProducts(
        data.filter((item) => item.class === categoryId),
      )
    }
    setFilteredProducts(data)
  }

  const handleFilterByPrice = () => {
    const filteredProductsByRange = filteredProducts.filter(
      (item) => item.price > rangeValue[0] && item.price < rangeValue[1],
    )
    setFilteredProducts(filteredProductsByRange)
  }

  useEffect(() => {
    handleFilterByRouteParams()
    // eslint-disable-next-line
  }, [])

  return (
    <Styles.Container>
      <Styles.Content>
        <Styles.Filter>
          <div className="filter-price-container">
            <label className="filter-title">Filtrar por preço</label>
            <div className="range-values">
              <span>R$ {rangeValue[0].toFixed(2)}</span>
              <span>R$ {rangeValue[1].toFixed(2)}</span>
            </div>
            <ReactSlider
              className="range-slider"
              value={rangeValue}
              min={MIN}
              max={MAX}
              onChange={setRangeValue}
            />
            <div className="filter-actions">
              <button onClick={handleFilterByPrice}>Filtrar</button>
              <button onClick={handleFilterByRouteParams}>Remover</button>
            </div>
          </div>
          <div className="filter-type-container">
            <label className="filter-title">Filtrar por categoria</label>
            <div
              className="type-values"
              onClick={() => alert('Não adicionado')}
            >
              <span>
                <Close /> Camisas
              </span>
              <span>
                <Close /> Casacos
              </span>
              <span>
                <Close /> Calças
              </span>
            </div>
            <div className="filter-actions">
              <button onClick={() => alert('Não adicionado')}>Filtrar</button>
              <button onClick={() => alert('Não adicionado')}>Remover</button>
            </div>
          </div>
          <div className="filter-color-container">
            <label className="filter-title">Filtrar por cor</label>
            <div
              className="color-values"
              onClick={() => alert('Não adicionado')}
            >
              {filteredProducts.map((item, key) => (
                <Styles.ColorBox key={key} color={item.color} />
              ))}
            </div>
            <div className="filter-actions">
              <button onClick={() => alert('Não adicionado')}>Filtrar</button>
              <button onClick={() => alert('Não adicionado')}>Remover</button>
            </div>
          </div>
        </Styles.Filter>
        <div className="align-products-cards">
          {filteredProducts.map((item) => (
            <ProductCard data={item} key={item.id} />
          ))}
          {filteredProducts.length === 0 && (
            <span>Nenhum produto encontrado</span>
          )}
        </div>
      </Styles.Content>
    </Styles.Container>
  )
}
