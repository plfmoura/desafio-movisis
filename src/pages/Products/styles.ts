import styled from 'styled-components'

const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 100vh;
  gap: 2rem;
  flex-wrap: wrap;
  margin-top: 2rem;
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

export default {
  Container,
}
