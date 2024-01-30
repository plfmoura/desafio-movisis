import styled from 'styled-components'

const ProductContainer = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  min-height: 100vh;
  animation: appears-content 200ms ease-in-out normal;

  @keyframes appears-content {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  img {
    pointer-events: none;
  }
`

const ProductContent = styled.article`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

const ProductGalleryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 400px;

  .product-active-image {
    width: 100%;
    height: 100%;
    background-color: gray;
    object-fit: cover;
  }
`

const ProductInfoContainer = styled.div`
  width: 400px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .product-title {
    font-size: ${({ theme }) => theme.fontsSize.large};
  }

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
  ProductContent,
}
