import { useNavigate } from 'react-router-dom'
import Styles from './styles'

export default function Grid() {
  const navigate = useNavigate()

  return (
    <Styles.GridContainer>
      <div
        className="category"
        onClick={() => navigate(`/products/list/casaco`)}
      >
        <h3>Casacos, Jaquetas & Moletons</h3>
        <p>
          a partir de <br />
          <span>$149,90</span>
        </p>
      </div>
      <div
        className="category"
        onClick={() => navigate(`/products/list/camisa`)}
      >
        <div>
          <h3>
            Camisa <br />
            Básica
          </h3>
          <p className="promo-text">
            Ficou mais fácil garantir camisetas aqui na Reserva.
          </p>
        </div>
        <div>
          <p>
            a partir de <br /> <span>$79,90</span>
          </p>
        </div>
      </div>
    </Styles.GridContainer>
  )
}
