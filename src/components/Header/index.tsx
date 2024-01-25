import { Person, Search, ShoppingBag } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import Styles from './styles'

export default function Header() {
  return (
    <Styles.Container>
      <Styles.NavContainer className="nav-container">
        <span>OCURRENCE</span>
        <ul className="menu-container">
          <li className="menu-item">
            <Link to="/">ABOUT</Link>
          </li>
          <li className="menu-item">
            <Link to="/">MENS</Link>
          </li>
          <li className="menu-item">
            <Link to="/">WOMENS</Link>
          </li>
          <li className="menu-item">
            <Link to="/">CONTACT</Link>
          </li>
        </ul>
        <ul className="icons-container">
          <li className="icon-item">
            <Search />
          </li>
          <li className="icon-item">
            <Link to="/cart">
              <ShoppingBag />
            </Link>
          </li>
          <li className="icon-item">
            <Link to="/profile">
              <Person />
            </Link>
          </li>
        </ul>
      </Styles.NavContainer>
      {/* <Styles.NavShortcuts className="shortcuts-container">
        <ul className="shortcuts-list-content">
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
          <li className="shortcuts-item">
            <Link to="/products">ATALHO</Link>
          </li>
        </ul>
      </Styles.NavShortcuts> */}
    </Styles.Container>
  )
}
