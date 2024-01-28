import styled from 'styled-components'

const CartContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;

  h3 {
    font-size: ${({ theme }) => theme.fontsSize.medium};
  }

  .align-cart-content {
    display: flex;
    gap: 2rem;
  }
`

const CartContent = styled.div`
  .align-cards-container {
    border: 1px solid #33333350;
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

export default {
  CartContainer,
  CartContent,
}
