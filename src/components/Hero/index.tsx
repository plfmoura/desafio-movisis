import { Link } from 'react-router-dom'
import Styles from './styles'

export default function Hero() {
  return (
    <Styles.HeroContainer>
      <div className="align-text">
        <div className="align-top-text">
          <h2>bring the look to life with our fashion picks</h2>
          <Link to="/products">
            <p>shop now</p>
          </Link>
        </div>
        <h1>unique fashion style</h1>
      </div>
    </Styles.HeroContainer>
  )
}
