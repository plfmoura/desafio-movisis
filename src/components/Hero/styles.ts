import styled from 'styled-components'

const HeroContainer = styled.section`
  width: 100%;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  user-select: none;

  .align-text {
    background: ${({ theme }) => theme.colors.gray_900};
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    color: #fff;
    text-transform: uppercase;
    padding: 2rem;

    .align-left-text {
      width: 100%;

      h2 {
        font-size: ${({ theme }) => theme.fontsSize.extraLarge};
        width: 350px;
        margin-bottom: 1rem;
      }

      p {
        text-decoration: underline;
        color: #fff;
      }
    }
  }

  span {
    color: #fff;
    font-size: 8rem;
    font-weight: 600;
    white-space: nowrap;
  }
`

export default {
  HeroContainer,
}
