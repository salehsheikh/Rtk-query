import React from 'react'
import AllProducts from './components/AllProducts'
import UniqueProduct from './components/UniqueProduct'
import UpdateProduct from './components/UpdateProduct'
import DeleteProduct from './components/DeleteProuct'

const App = () => {
  return (
    // <div><AllProducts/></div>
    // <UniqueProduct/>
    // <UpdateProduct productId={2}/>
    <DeleteProduct productId={4}/>
  )
}

export default App