"use client"
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { toast } from '@/hooks/use-toast'
import React from 'react'

const DeleteUser = () => {
    const [id ,setId] = React.useState('')
    const fetchData = async (id : string) => {
        try {
                const response = await fetch(`/api/user/${id}`, {
                    method: 'DELETE',
                    headers:{
                        'content-type' : 'application/json'
                    }

                })
                toast({
                    title: "user data deleted",
                    
                  })
                if (!response.ok) {
                    throw new Error('Failed to delete user data');
                  }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <Input value={id} onChange={(e) => setId(e.target.value)} />
        <Button variant='destructive' className='block' onClick={() => fetchData(id)}>Delete</Button>
    </div>
  )
}

export default DeleteUser