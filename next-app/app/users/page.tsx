import Link from 'next/link'
import React from 'react'

import ProductsCard from './comonents/ProductsCard'

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const UsersPage = async () => {
  const res = await fetch(
    'http://jsonplaceholder.typicode.com/users',
    { cache: 'no-store' }//this line used for disable caching    
    /*   { next: { revalidate: 60 } }//this will make the page revalidate after 60 seconds */

  );
  const users: User[] = await res.json();
  return (
    <div>
      <div>UsersPage</div>
      <nav>
        <Link href="new">New Userdd</Link> <br />
        <Link href="/">Home</Link>
      </nav>
      <div>
        <ProductsCard />
      </div>


      <h2 className='text-2xl font-bold mt-4 underline'>Users List</h2>

      <ol>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ol>
    </div>
  )
}

export default UsersPage