import styled from 'styled-components'

const HeroContainer = styled.section`
  width: 100%;
  max-width: 1560px;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 1rem auto 0;

  user-select: none;
  color: #333;

  .align-text {
    background: rgb(250, 250, 250);
    background: linear-gradient(
      90deg,
      rgba(250, 250, 250, 0.937395026369923) 2%,
      rgba(210, 222, 231, 1) 32%,
      rgba(207, 207, 207, 0.9654062308517157) 70%,
      rgba(233, 209, 215, 0.9093838218881303) 100%
    );
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-transform: uppercase;
    padding: 2rem;

    .align-left-text {
      width: 100%;

      h2 {
        font-size: ${({ theme }) => theme.fontsSize.extraLarge};
        width: 350px;
        margin-bottom: 1rem;
      }

      button {
        background: ${({ theme }) => theme.colors.gray_900};
        width: 280px;
        height: 3rem;
        color: #fff;
        font-size: ${({ theme }) => theme.fontsSize.medium};
        letter-spacing: 5px;
      }
    }
  }

  span {
    font-size: 6rem;
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-weight: 600;
    white-space: nowrap;
    border: 3px dotted #111;
    padding: 1rem;
  }
`

const DialogContainer = styled.div`
  display: grid;
  place-content: center;
  text-align: center;
  gap: 1rem;

  span {
    font-family: ${({ theme }) => theme.fonts.secondary};
    font-size: ${({ theme }) => theme.fontsSize.extraLarge};
    letter-spacing: 5px;
    border: 3px dotted #fff;
    padding: 1rem;
  }
`
export default {
  HeroContainer,
  DialogContainer,
}
