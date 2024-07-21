import React from 'react'

interface Props {
  params: {
    id:number,
    photoid: number
  }
}
const PhotoIdPage = ({params:{id, photoid}}:Props) => {
  return (
    <div>
      <p>id : {id}</p>
      <p>PhotoIdPage : {photoid}</p>
      </div>
  )
}

export default PhotoIdPage