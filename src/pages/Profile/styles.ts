import styled from 'styled-components'

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1560px;
  min-height: 100vh;
  margin: 0 auto;
  padding-inline: 1rem;
  animation: appears-content 200ms ease-in-out normal;

  @keyframes appears-content {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`

export default {
  Container,
}
