import Link from 'next/link';
import React from 'react'
import { sort } from 'fast-sort';

interface User {
    id: number;
    name: string;
    username: string;
    email: string;
}

interface Props {
    sortOrder: string;
}

const UserTable = async ({sortOrder}:Props) => {

    const res = await fetch(
        'http://jsonplaceholder.typicode.com/users',
        { cache: 'no-store' }//this line used for disable caching    
        /*   { next: { revalidate: 60 } }//this will make the page revalidate after 60 seconds */

    );
    const users: User[] = await res.json();

    // const sortedUsers = sort(users).asc(user => user[sortOrder]);
    const sortedUsers = sort(users).asc(sortOrder === 'name' ? user => user.name : user => user.email);
    // console.log("sortOrder:",sortOrder);
    
    return (
        <div>
            <h2 className='text-2xl font-bold mt-4 underline'>Users List</h2>
           
            <table className='table  table-bordered'>
                <thead>
                    <tr>
                        <th>
                            <Link href="/users?sortOrder=name">Name</Link>
                        </th>
                        <th>
                        <Link href="/users?sortOrder=email">Email</Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable