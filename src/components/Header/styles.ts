import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 4rem;
  border-bottom: 2px solid rgba(27, 31, 35, 0.15);
  padding: 1rem 2rem;

  img {
    height: 1.5rem;
  }

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
  max-width: 1560px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;

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

export default {
  Container,
  NavContainer,
}
