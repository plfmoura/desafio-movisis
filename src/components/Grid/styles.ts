import styled from 'styled-components'

const GridContainer = styled.section`
  width: 100%;
  height: 30rem;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  user-select: none;

  @media screen and (max-width: 1024px) {
    height: fit-content;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: 60rem;
  }

  @media screen and (max-width: 580px) {
    display: none;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontsSize.large};

    @media screen and (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontsSize.medium};
    }

    @media screen and (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontsSize.large};
    }
  }

  p {
    font-size: ${({ theme }) => theme.fontsSize.large};

    @media screen and (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontsSize.normal};
    }

    @media screen and (max-width: 768px) {
      font-size: ${({ theme }) => theme.fontsSize.large};
    }
  }

  span {
    font-size: 5.5rem;
    font-weight: 500;

    @media screen and (max-width: 1024px) {
      font-size: ${({ theme }) => theme.fontsSize.doubleExtraLarge};
    }

    @media screen and (max-width: 768px) {
      font-size: 5.5rem;
    }
  }

  .category:nth-child(1) {
    height: 100%;
    flex: 1;
    background: url('/category-2.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
      height: 20rem;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    color: #fff;
    padding: 2rem;

    h3 {
      width: 200px;
      color: ${({ theme }) => theme.colors.white};
      font-weight: 600;
      background-color: ${({ theme }) => theme.colors.gray_800};
      padding: 1rem;
    }
  }

  .category:nth-child(2) {
    height: 100%;
    flex: 1;
    background: url('/category-1.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    @media screen and (max-width: 1024px) {
      height: 20rem;
    }

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;

    div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    .promo-text {
      color: ${({ theme }) => theme.colors.white};
      font-weight: 600;
      background-color: ${({ theme }) => theme.colors.gray_800};
      padding: 1rem;
      width: fit-content;
    }
  }
`

export default {
  GridContainer,
}
