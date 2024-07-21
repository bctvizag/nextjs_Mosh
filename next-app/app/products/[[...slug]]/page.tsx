import React from 'react'

const ProductPage = (props:any) => {
  return (
    <div>
        <p>ProductPage</p>
        <pre>
        {JSON.stringify(props, null, 2)}
        </pre>

    </div>
  )
}

export default ProductPage