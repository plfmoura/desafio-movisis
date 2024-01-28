import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

import Styles from './styles'

type CartCardProps = {
  data: {
    id: string
    image: string[]
    name: string
    info: string
    price: number
  }
}

export default function CartCard({ data }: CartCardProps) {
  const { products, removeCartProduct, addCartProduct } =
    useContext(CartContext)

  const handleCalculateAmount = (id: string) => {
    const filteredArray = products.filter((item) => item.id === id)

    const totalAmount = filteredArray.reduce((sum, item) => sum + item.price, 0)

    return <h2>${totalAmount.toFixed(2)}</h2>
  }

  return (
    <Styles.CartCardContainer>
      <img src={data.image[0]} alt={data.name} />
      <Styles.CardInfo className="align-card-info">
        <div>
          <p className="card-title">{data.name}</p>
          <p className="card-info">{data.info}</p>
        </div>
        <div className="card-actions">
          <button>Remove</button>
          <button>Add favorites</button>
        </div>
      </Styles.CardInfo>
      <Styles.CardPrice className="align-card-price">
        {/* <h2>${() => handleCalculateAmount(data.id))}</h2> */}
        {handleCalculateAmount(data.id)}
        <div className="card-amount-actions">
          <button onClick={() => removeCartProduct(data.id)}>-</button>
          <span>{products.filter((item) => item.id === data.id).length}</span>
          <button onClick={() => addCartProduct(data.id)}>+</button>
        </div>
      </Styles.CardPrice>
    </Styles.CartCardContainer>
  )
}
