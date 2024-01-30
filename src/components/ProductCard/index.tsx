import { useNavigate } from 'react-router-dom'
import Styles from './styles'
import { CardProps } from '../CartCard'

export default function ProductCard({ data }: CardProps) {
  const navigate = useNavigate()

  return (
    <Styles.ProductCardContainer
      key={data.id}
      className="card-container"
      onClick={() => navigate(`/products/details/${data.id}`)}
    >
      <img src={data.image[0]} alt={data.name} width={300} height={350} />
      <div className="align-card-text">
        <p className="text-name">{data.name}</p>
        <p className="text-price">R$ {data.price.toFixed(2)}</p>
      </div>
    </Styles.ProductCardContainer>
  )
}
