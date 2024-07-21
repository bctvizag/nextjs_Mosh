import Link from 'next/link'
import React from 'react'

import ProductsCard from './../components/ProductsCard'
import UserTable from './UserTable'

interface Props {
  searchParams: { sortOrder: string }
}

const UsersPage = async ({searchParams:{sortOrder}}:Props) => {

  return (
    <div>
      <div>UsersPage</div>
      <nav className='flex gap-2'>
        <Link href="new">New Userdd</Link> <br />
        <Link href="/">Home</Link>
      </nav>
      <div>
        <ProductsCard />
      </div>
      <p>Sortby : {sortOrder}</p>
    <UserTable sortOrder = {sortOrder}/>



    </div>
  )
}

export default UsersPage