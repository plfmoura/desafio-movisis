import styled from 'styled-components'

const HeroContainer = styled.section`
  width: 100%;
  height: 40rem;
  padding: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  .align-text {
    background: black;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 37rem;
    width: 98%;
    z-index: 2;
    position: absolute;
    color: #fff;
    text-transform: uppercase;

    .align-top-text {
      width: 100%;
      padding: 2rem;

      h2 {
        font-size: ${({ theme }) => theme.fontsSize.extraLarge};
        width: 350px;
        margin-bottom: 1rem;
      }

      a {
        text-decoration: underline;
        color: #fff;
      }
    }

    h1 {
      font-size: 7.8rem;
    }
  }
`

export default {
  HeroContainer,
}
