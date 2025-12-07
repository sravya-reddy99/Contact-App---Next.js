import ContactForm from '@/app/_components/ContactForm'
import { createContactAction } from '@/app/actions/contact'
import React from 'react'

export default function NewContactPage() {
  return (
    <div className='mx-w-md mx-auto p-8 bg-white rounded-lg shadow-md'>
      <h1 className = "text-2xl fontbold mb-6">Create New Contact</h1>
      <ContactForm action={createContactAction}/>
    </div>
  )
}
