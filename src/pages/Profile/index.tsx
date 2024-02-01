import { useEffect, useState } from 'react'
import Styles from './styles'

export function Profile() {
  const [history, setHistory] = useState<object[]>([])

  useEffect(() => {
    const getHistory = localStorage.getItem('purchase')
    setHistory(JSON.parse(getHistory))
  }, [])

  useEffect(() => {
    console.log(history)
  }, [history])

  return (
    <Styles.Container>
      <h1>Histórico de compras</h1>
    </Styles.Container>
  )
}
