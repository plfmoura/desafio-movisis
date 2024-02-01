import { Person, Search, ShoppingBag } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Styles from './styles'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export default function Header() {
  const { products } = useContext(CartContext)

  return (
    <Styles.Container>
      <Styles.NavContainer className="nav-container">
        <Link to="/">
          <img src="/reserva-logo.png" alt="branding logo" />
        </Link>
        <ul className="menu-container">
          <li className="menu-item">
            <Link to="/">ÍNICIO</Link>
          </li>
          <li className="menu-item">
            <Link to="/products/list/all">MASCULINO</Link>
          </li>
          <li className="menu-item">
            <Link to="/products/list/all">FEMININO</Link>
          </li>
          <li className="menu-item">
            <Link to="/">CONTATO</Link>
          </li>
        </ul>
        <ul className="icons-container">
          <li className="icon-item">
            <Search />
          </li>
          <li className="icon-item">
            <Link to="/cart" className="cart-icon-container">
              <ShoppingBag />
              {products.length !== 0 && <span>{products.length}</span>}
            </Link>
          </li>
          <li className="icon-item">
            <Link to="/">
              <Person />
            </Link>
          </li>
        </ul>
      </Styles.NavContainer>
    </Styles.Container>
  )
}
