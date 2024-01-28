import styled from 'styled-components'

const ProductContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  margin-top: 2rem;

  .card-container {
    img {
      pointer-events: none;
    }
  }
`

export default {
  ProductContainer,
}
