import styled from 'styled-components'

const CartContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  color: ${({ theme }) => theme.colors.gray_600};

  .cart-content-header {
    display: flex;
    justify-content: space-between;

    button {
      color: #f00;
      font-weight: 600;
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.fontsSize.medium};
    margin-bottom: 1rem;
  }

  .align-cart-content {
    width: 1100px;
    height: 600px;
    display: flex;
    gap: 2rem;
  }

  .pricing-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 30%;
  }
`

const CartContent = styled.div`
  width: 70%;

  .align-cards-container {
    border: 1px solid #33333350;
    border-radius: 5px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

const DiscountContent = styled.div`
  div {
    height: 4rem;
    padding-inline: 0.6rem;
    border: 1px solid #33333350;
    border-radius: 5px;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  button {
    margin-left: auto;
    background-color: #333;
    color: #fff;
    padding: 0.3rem;
  }

  .discount-green-overlay {
    color: #0f0;
    font-weight: 600;
  }
`

const PricingContent = styled.div`
  .align-price-feedback {
    border: 1px solid #33333350;
    padding: 0.6rem;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    div {
      display: flex;
      justify-content: space-between;
    }
  }

  button {
    background-color: #1751cf;
    color: #fff;
    font-weight: 600;
    width: 100%;
    height: 2.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.4rem;
    border-radius: 5px;
    margin-top: 1rem;
  }
`

export default {
  CartContainer,
  CartContent,
  DiscountContent,
  PricingContent,
}
