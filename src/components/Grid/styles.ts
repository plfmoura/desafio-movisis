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
    display: none;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontsSize.extraLarge};
  }

  p {
    font-size: ${({ theme }) => theme.fontsSize.large};
  }

  span {
    font-size: 8rem;
    font-weight: 500;
  }

  .category:nth-child(1) {
    height: 100%;
    flex: 1;
    background: url('/category-2.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    color: #fff;
    padding: 2rem;

    h3 {
      width: 200px;
    }

    p {
      position: absolute;
      bottom: 0;
    }
  }

  .category:nth-child(2) {
    height: 100%;
    flex: 1;
    background: url('/category-1.jpg') no-repeat;
    background-size: cover;
    background-position: center;
    cursor: pointer;

    display: flex;
    justify-content: space-between;
    padding: 2rem;

    .promo-text {
      position: absolute;
      bottom: 0;
      white-space: nowrap;

      @media screen and (max-width: 1024px) {
        white-space: normal;
        position: relative;
      }
    }

    div {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    div:last-of-type {
      height: fit-content;
    }
  }
`

export default {
  GridContainer,
}
