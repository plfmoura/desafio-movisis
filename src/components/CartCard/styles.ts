import styled from 'styled-components'

const CartCardContainer = styled.div`
  width: 100%;
  height: 6rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  color: #333;

  img {
    width: 120px;
    height: 100%;
    object-fit: cover;
  }
`

const CardInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  p {
    width: 300px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 1rem;
  }

  .card-actions {
    display: flex;
    gap: 1rem;
  }
`

const CardPrice = styled.div`
  h2 {
    margin-bottom: 1rem;
  }

  .card-amount-actions {
    display: flex;
    align-items: center;
    gap: 1rem;

    button {
      border-radius: 5px;
      background-color: ${({ theme }) => theme.colors.gray_300};
      width: 30px;
      height: 30px;
      color: #333;
      font-size: 1.5rem;
    }
  }
`

export default {
  CartCardContainer,
  CardInfo,
  CardPrice,
}
