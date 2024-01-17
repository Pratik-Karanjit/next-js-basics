import React from 'react'

interface User {
    id: number
    name: string
}

const UsersPage = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users'
   ,{cache:'no-store'})       //does not store in cache when you have to show fresh data(disables caching)


//    const res = await fetch('https://jsonplaceholder.typicode.com/users'
//    ,{next:{revalidate: 10}})       //takes data from backend every 10 seconds
   const users: User[] = await res.json()
  return (
    <>
    <div style={{color:"black"}}>Users
    <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
    </div>
    </>
  )
}

export default UsersPage