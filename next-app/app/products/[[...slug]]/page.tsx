import React from 'react'

interface Props {
  params: {slug: string[]  },
  searchParams: { sortOrder: string},
  // searchParams: { [key: string]: string | string[] | undefined },
}

const ProductPage = ({params:{slug}, searchParams}:Props) => {
  return (
    <div>
        <p>ProductPage</p>
        <pre>
        {JSON.stringify(slug, null, 2)},
        
        {JSON.stringify(searchParams, null, 2)}
        </pre>

    </div>
  )
}

export default ProductPage