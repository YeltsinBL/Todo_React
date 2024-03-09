import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import { Headers } from './components/Headers.jsx'

function App () {
  const [products] = useState(initialProducts)
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0
  })

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filters.minPrice &&
        (
          filters.category === 'all' ||
          filters.category === product.category
        )
      )
    })
  }
  const filteredProduct = filterProducts(products)
  return (
    <>
      <Headers changeFilters={setFilters} />
      <Products products={filteredProduct} />
    </>

  )
}

export default App
