import { Link } from 'react-router-dom'
import Styles from './styles'

export default function Hero() {
  return (
    <Link to="/products/list/all">
      <Styles.HeroContainer>
        <div className="align-text">
          <div className="align-left-text">
            <h2>Garanta aqui seu cupom!</h2>
            <p>EU QUERO</p>
          </div>
          <span>10% OFF</span>
        </div>
      </Styles.HeroContainer>
    </Link>
  )
}
