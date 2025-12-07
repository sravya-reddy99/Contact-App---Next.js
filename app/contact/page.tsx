import React from 'react'
import { getSession } from '../_lib/session'
import { getContacts } from '../api/contact';
import ContactList from '../_components/ContactList';

export default async function ContactPage() {
  const user = await getSession();
  if (!user) {
    return (
      <div>
        Please <a href="/login" className="text-blue-600 underline">login</a> to view your contacts.
      </div>
    )
  }
  const contacts = await getContacts(user?.id);
  console.log(contacts)
  if (!contacts || contacts.length === 0) {
    return (
    <div>
      No contacts found. <a href="/contact/new" className="text-blue-600 underline">Add a new contact</a> to your contact list.
    </div>
    )
  }
  return (
    <div>
      <div className='flex justify-between items-center mb-6'>
        <h1 className='text-2xl font-bold'>Your Contacts</h1>
        <a href="/contact/new" className='bg-blue-600 text-white py-2 px-4 rounded-md'>Add New Contact</a>
      </div>
      <ContactList contacts={contacts}/>
    </div>
  )
}
