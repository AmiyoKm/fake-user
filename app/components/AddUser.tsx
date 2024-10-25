
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useEffect } from 'react'

const AddUser = () => {
    const [name , setName] = React.useState('')
    const [email , setEmail] = React.useState('')
    const [password , setPassword] = React.useState('')
    const [id ,setId] = React.useState('')
    const [age , setAge] = React.useState(0)

    const fetchData = async () => {
        try {
            const response = await fetch('/api/user',
                {
                    method: 'POST',
                    headers : {
                    'content-type' : 'application/json'
                    },
                    body : JSON.stringify({name, email, password, id, age})
                }
            )
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchData();
    },[])
  return (
    <div>
       <form action="" onSubmit={fetchData}>
        <Label>Name</Label>
        <Input className='mb-3' type='text' value={name} placeholder='Enter Name' onChange={(e) => setName(e.target.value)} />
        <Label>ID</Label>
        <Input className='mb-3' type='text' value={id} placeholder='Enter ID' onChange={(e) => setId(e.target.value)} />
        <Label>Age</Label>
        <Input  className='mb-3' type='number' value={age} placeholder='Enter Age' onChange={(e) => setAge(Number(e.target.value))} />
        <Label>Email</Label>
        <Input className='mb-3' type='email' value={email} placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
        <Label>Password</Label>
        <Input className='mb-3' type='password' value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
        <Button className='block' type='submit'>Add</Button>
       
       </form>
    </div>
  )
}

export default AddUser