import styled from 'styled-components'

const PromoContainer = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto;
  font-weight: 600;

  .align-promo-cards {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;

    .promo-card-container {
      width: 220px;
      height: 220px;
      background-color: #f2f2f2;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      div {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .text-name {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
    font-size: ${({ theme }) => theme.fontsSize.small};
  }

  .text-price {
    color: #e5002b;
  }
`

export default {
  PromoContainer,
}
