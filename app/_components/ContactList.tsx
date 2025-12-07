import React from 'react'
import { ContactType } from '../_types/contact'
import Link from 'next/link'
import { FiEdit } from 'react-icons/fi'
import DeleteButton from './DeleteButton'
import { deleteContactAction } from '../actions/contact'

export default function ContactList(props: {contacts: ContactType[]}) {
  return (
    <div className='space-y-4'>{props.contacts.map((contact) => (
        <div key = {contact.id} className='p-4 border rounded-lg' style={{padding: "10px", marginBottom: "10px"}}> 
            <div className='flex justify-between items-start'>
                <div>
                    <h2 className='text-xl font-bold'>{contact.name}</h2>
                    <p className='text-gray-600'>{contact.email}</p>
                </div>
                <div className='flex items-center self-center gap-3'>
                    <Link href={`/contact/edit/${contact.id}`} style={{marginRight: "10px", padding: "7px"}} className='text-blue-600 flex items-center gap-2 p-10 border border-blue-300 rounded-md hover:border-blue-400 hover:bg-blue-100'>
                    <FiEdit className='text-blue-600 text-lg'/> Edit</Link>
                    <DeleteButton contact={contact} action={deleteContactAction}/>
                </div>
            </div>
        </div>
    ))}
    </div>
  )
}
