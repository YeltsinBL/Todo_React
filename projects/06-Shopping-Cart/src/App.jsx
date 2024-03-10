import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/Products.jsx'
import { Headers } from './components/Headers.jsx'
import { Footer } from './components/Footer.jsx'
import { IS_DEVELOPMENT } from './config.js'
import { useState } from 'react'
import { useFilters } from './hooks/useFilters.js'

function App () {
  const [products] = useState(initialProducts)
  const { filterProducts } = useFilters()
  const filteredProduct = filterProducts(products)
  return (
    <>
      <Headers />
      <Products products={filteredProduct} />
      {IS_DEVELOPMENT && <Footer />}
    </>

  )
}

export default App
