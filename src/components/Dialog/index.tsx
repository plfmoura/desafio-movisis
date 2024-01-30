import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import { ReactNode } from 'react'

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#333',
  border: '2px solid #000',
  color: '#fff',
  boxShadow: 24,
  p: 4,
  outline: 'none',
}

interface DialogProps {
  children: ReactNode
  controller: boolean
  toClose: () => void
}

export function Dialog({ children, controller, toClose }: DialogProps) {
  return (
    <div>
      <Modal
        open={controller}
        onClose={toClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{children}</Box>
      </Modal>
    </div>
  )
}
