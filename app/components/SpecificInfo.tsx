"use client"
import { Button } from '@/components/ui/button';



import { Input } from '@/components/ui/input';

import React, { use } from 'react'
interface User {
    id:string
    name: string;
    email: string;
    password: string;
  }
const SpecificInfo = () => {
    const [usersData, setUsersData] = React.useState<User[] | undefined>();
    const [id,setId] = React.useState('') 
    const fetchUsers = async (id :string) => {
        try {
            const response = await fetch(`/api/user/${id}`);
            const data = await response.json();
            console.log(data);
            if(data) setUsersData(data.data);
            
        } catch (error) {
              console.log(error)  
        }
     
    } 
    React.useEffect(() => {
      
        fetchUsers('')   
    },[])
  return (
    <div>
        <Input value={id} onChange={(e) => setId(e.target.value)} />
        <Button className='block' onClick={()=>fetchUsers(id)}>Get User</Button>
        {
            usersData ?  
            <>
            <p>Name:{usersData[0].name}</p>
            <p>ID:{usersData[0].id}</p>
            <p>Email:{usersData[0].email}</p>
            <p>Password:{usersData[0].password}</p>
            </>
            
            : <div>User Doesn't Exist</div>
        }
    </div>
  )
}

export default SpecificInfo