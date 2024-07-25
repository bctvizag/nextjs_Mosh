import Link from 'next/link'
import React from 'react'

import ProductsCard from './../components/ProductsCard'
import UserTable from './UserTable'

interface Props {
  searchParams: { sortOrder: string }
}

const UsersPage = async ({searchParams:{sortOrder}}:Props) => {

  return (
    <>
    <div>UsersPage</div>
    <div className='flex gap-2'>
      
      <nav className='flex flex-col'>
        <Link href="/">Home</Link>
       
        <Link href="users/new">user/new</Link> 
        <Link href="users/12">User/id</Link> 
        <Link href="users/12/photo/23">User/id/photo/photoid</Link> 
       

        
        <Link href="/items/CPU">/items/CPU</Link>
        <Link href="/items/SSD/256">/items/SSD/256</Link>

        <Link href="/products">product</Link>
        <Link href="/products/dairy">product/dairy</Link>
        <Link href="/products/dairy/milk">product/dairy/milk</Link>

        <Link href="/products?sortOrder=price">products?sortOrder=price</Link>
      </nav>

      <div>
        <ProductsCard />

        <p>Sortby : {sortOrder}</p>
        <UserTable sortOrder = {sortOrder}/>
      </div>
      



    </div>
    </>
    
  )
}

export default UsersPage