'use client';
import React from 'react'

function AddToCardBtn() {
  return (
    <>
      <button className='btn btn-primary'
      onClick={      () => {
       console.log('Add to cart clicked')
      }}
      >Add to Cart</button>
    </>
  )
}

export default AddToCardBtn