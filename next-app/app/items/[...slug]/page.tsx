import React from 'react'

interface Props {
 params: {slug:string[] } // TODO: add props here
}

const Itemspage = ({params:{slug}}:Props) => {
  return (
    <div>Itemspage Slug : {slug}</div>
  )
}

export default Itemspage