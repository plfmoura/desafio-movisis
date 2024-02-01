import styled from 'styled-components'

const Container = styled.main`
  width: 100%;
  max-width: 1560px;
  min-height: 100vh;
  margin: 2rem auto 0;
  animation: appears-content 200ms ease-in-out normal;

  @keyframes appears-content {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .card-container {
    img {
      pointer-events: none;
    }
  }
`

const Content = styled.section`
  display: flex;
  gap: 2rem;

  .align-products-cards {
    width: 80%;
    background-color: blue;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
  }
`

const Filter = styled.aside`
  width: 20%;
  height: 300px;
  background-color: #fff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: sticky;
  top: 0;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  label {
    font-weight: 600;
  }

  .range-values,
  .range-actions {
    display: flex;
    justify-content: space-between;
  }

  .range-slider {
    width: 100%;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.gray_400};
    border-radius: 5px;

    .thumb {
      width: 20px;
      height: 20px;
      cursor: pointer;
      background-color: #fff;
      border: 2px solid ${({ theme }) => theme.colors.primary};
      border-radius: 50%;
      top: -10px;
    }
  }

  .range-actions {
    margin-top: 1rem;
    flex-direction: row-reverse;

    button:last-of-type {
      color: ${({ theme }) => theme.colors.tertiary};
    }

    button {
      font-weight: 600;
    }
  }
`

export default {
  Container,
  Content,
  Filter,
}
