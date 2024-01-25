import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 3rem;

  nav {
    display: flex;
    width: 100%;
  }

  ul li a,
  ul li,
  span {
    color: ${({ theme }) => theme.colors.gray_900};
  }
`

const NavContainer = styled.nav`
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  border-bottom: 2px solid rgba(27, 31, 35, 0.15);

  ul {
    display: flex;

    a {
      font-weight: 600;
    }
  }

  .menu-container {
    gap: 3rem;
  }

  .icons-container {
    gap: 1rem;
  }
`

const NavShortcuts = styled.nav`
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 2px solid rgba(27, 31, 35, 0.15);

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`

export default {
  Container,
  NavContainer,
  NavShortcuts,
}
