import styled from 'styled-components'

const ProductCardContainer = styled.div`
  min-width: 270px;
  flex: 1;
  max-width: 300px;

  img {
    width: 100%;
  }

  .text-name {
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }

  .text-price {
    color: ${({ theme }) => theme.colors.tertiary};
    font-weight: 600;
  }
`

export default {
  ProductCardContainer,
}
