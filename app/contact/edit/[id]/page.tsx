import ContactForm from '@/app/_components/ContactForm'
import { updateContactAction } from '@/app/actions/contact'
import { getContactById } from '@/app/api/contact';
import React from 'react'

export default async function EditContactPage ({params}: {params: Promise<{id: string}>}) {
const {id} = await params;
const contact = await getContactById(id);
  return (
      <div className='mx-w-md mx-auto p-8 bg-white rounded-lg shadow-md'>
        <h1 className = "text-2xl fontbold mb-6">Edit New Contact</h1>
        <ContactForm action={updateContactAction} contact={contact}/>
      </div>
  )
}
