import styled from 'styled-components'

const ProductContainer = styled.main`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;

  .card-container {
    img {
      pointer-events: none;
    }
  }
`

const ProductGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 400px;

  .product-active-image {
    width: 100%;
    height: 400px;
    background-color: gray;
    object-fit: cover;
  }

  .product-gallery-mini {
    height: 150px;
    display: flex;
    gap: 1rem;

    img {
      background-color: #333;
      flex: 1;
    }
  }
`

const ProductInfoContainer = styled.div`
  width: 400px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .product-title,
  .product-price {
    font-size: ${({ theme }) => theme.fontsSize.extraLarge};
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    font-size: ${({ theme }) => theme.fontsSize.medium};
    flex: 1;
    padding: 1rem 0;
    background-color: ${({ theme }) => theme.colors.secondary};
    color: ${({ theme }) => theme.colors.white};
    margin-top: 2rem;
  }
`

export default {
  ProductContainer,
  ProductGalleryContainer,
  ProductInfoContainer,
}
