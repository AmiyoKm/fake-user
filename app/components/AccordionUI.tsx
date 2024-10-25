"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React, { useEffect } from 'react'
import AllUsers from './AllUsers'
import SpecificInfo from './SpecificInfo'
import AddUser from './AddUser'
import UpdateUser from './UpdateUser'
import DeleteUser from './DeleteUser'

const AccordionUI = () => {
    
  return (
    <div className='w-6/12 flex justify-center'>
        <Accordion type='single' collapsible  className='w-full'>
            <AccordionItem value='item-1'>
                <AccordionTrigger>Name</AccordionTrigger>
                <AccordionContent>
                    <AllUsers />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-2'>
                <AccordionTrigger>Find a Specific user</AccordionTrigger>
                <AccordionContent>
                   <SpecificInfo />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-3'>
                <AccordionTrigger>Add a User</AccordionTrigger>
                <AccordionContent>
                   <AddUser />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-4'>
                <AccordionTrigger>Update a User</AccordionTrigger>
                <AccordionContent>
                   <UpdateUser />
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value='item-5'>
                <AccordionTrigger>Delete a User</AccordionTrigger>
                <AccordionContent>
                   <DeleteUser />
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    </div>
  )
}

export default AccordionUI