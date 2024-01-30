import Styles from './styles'
import { useState } from 'react'
import { Dialog } from '../Dialog'

export default function Hero() {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <Styles.HeroContainer>
        <div className="align-text">
          <div className="align-left-text">
            <h2>Garanta aqui seu cupom!</h2>
            <button onClick={handleOpen}>EU QUERO!</button>
          </div>
          <span>30% OFF</span>
        </div>
      </Styles.HeroContainer>

      <Dialog toClose={handleClose} controller={open}>
        <Styles.DialogContainer className="align-dialog-content">
          <p>Use o código promocional</p>
          <span>PROMOCAO#30</span>
          <p>no momento de sua compra.</p>
        </Styles.DialogContainer>
      </Dialog>
    </>
  )
}
