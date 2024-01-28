import styled from 'styled-components'

const PromoContainer = styled.section`
  width: 100%;
  height: 6rem;
  margin-top: 1rem;

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
`

export default {
  PromoContainer,
}
