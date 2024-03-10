import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { useState } from 'react'
import { Headers } from './components/Headers.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'

function useFilters () {
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
  return { filters, filterProducts, setFilters }
}
function App () {
  const [products] = useState(initialProducts)
  const { filters, filterProducts, setFilters } = useFilters()
  const filteredProduct = filterProducts(products)
  return (
    <>
      <Headers changeFilters={setFilters} />
      <Products products={filteredProduct} />
      {IS_DEVELOPMENT && <Footer filters={filters} />}
    </>

  )
}

export default App
