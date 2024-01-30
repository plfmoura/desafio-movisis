import styled from 'styled-components'

const FooterContainer = styled.footer`
  width: 100%;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 2rem;
  margin-top: 3rem;
  background-color: ${({ theme }) => theme.colors.gray_900};
  color: ${({ theme }) => theme.colors.gray_100};
`

export default {
  FooterContainer,
}
