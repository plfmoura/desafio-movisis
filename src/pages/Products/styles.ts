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
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`

export default {
  Container,
  Content,
}
