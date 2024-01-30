import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  height: 5rem;
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.colors.gray_900};
  color: ${({ theme }) => theme.colors.gray_100};

  .footer-content {
    width: 100%;
    max-width: 1560px;
    margin: 0 auto;
    padding-top: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 2rem;
  }
`

export default {
  FooterContainer,
}
