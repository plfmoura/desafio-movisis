import { useNavigate } from 'react-router-dom'
import Styles from './styles'

export default function Grid() {
  const navigate = useNavigate()

  return (
    <Styles.GridContainer>
      <div
        className="category right-content"
        onClick={() => navigate(`/products/list/casaco`)}
      >
        <h3>Casacos, Jaquetas & Moletons</h3>
        <p>
          a partir de <br />
          <span>$149,90</span>
        </p>
      </div>
      <div
        className="category left-content"
        onClick={() => navigate(`/products/list/camisa`)}
      >
        <div>
          <h3>
            Camisa <br />
            Básica
          </h3>
          <p>
            a partir de <br /> <span>$79,90</span>
          </p>
        </div>
        <p className="promo-text">Garanta camisetas de qualidade.</p>
      </div>
    </Styles.GridContainer>
  )
}
