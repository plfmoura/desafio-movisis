import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
  useEffect,
} from 'react'
import data from '../data/products.json'

export interface Product {
  id: string
  image: string[]
  name: string
  info: string
  color: string
  class: string
  price: number
  rating: number
}

interface FavoriteContextProps {
  products: Product[]
  setProducts: Dispatch<SetStateAction<Product[]>>
  removeCartProduct: (id: string) => void
  addCartProduct: (id: string) => void
}

const defaultValues: FavoriteContextProps = {
  products: [],
  setProducts: () => {},
  removeCartProduct: () => {},
  addCartProduct: () => {},
}

type FavoriteContextProviderProps = {
  children: ReactNode
}

export const FavoriteContext =
  createContext<FavoriteContextProps>(defaultValues)

export function FavoriteProvider({ children }: FavoriteContextProviderProps) {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    if (products.length > 0)
      return localStorage.setItem('cart', JSON.stringify(products))
  }, [products])

  const addCartProduct = (id: string) => {
    const selectedProduct = data.find((product) => product.id === id)

    if (selectedProduct) {
      setProducts((prevProducts) => [...prevProducts, selectedProduct])
    }
  }

  const removeCartProduct = (id: string) => {
    const selectedProduct = data.find((product) => product.id === id)
    localStorage.removeItem('cart')

    if (selectedProduct) {
      setProducts((prevProducts) => {
        const index = prevProducts.findIndex((product) => product.id === id)

        if (index !== -1) {
          const updatedProducts = [...prevProducts]
          updatedProducts.splice(index, 1)
          return updatedProducts
        }

        return prevProducts
      })
    }
  }

  const cartValues: FavoriteContextProps = {
    products,
    setProducts,
    removeCartProduct,
    addCartProduct,
  }

  return (
    <FavoriteContext.Provider value={cartValues}>
      {children}
    </FavoriteContext.Provider>
  )
}
