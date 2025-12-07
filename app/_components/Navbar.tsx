import React from 'react'
import Link from 'next/link'
import LogoutButton from './LogoutButton';
import { getSession } from '../_lib/session';

export default async function Navbar() {
    const session = await getSession();

  return (
    <nav className='bg-white shaddow-sm'>
        <div className='container mx-auto px-4 py-2 flex justify-between items-center'>
            <Link href="/" className='text-xl font-bold text-blue-600'>Contact Manager</Link>
            <div className='flex items-center space-x-4'>
                {session ? (
                    <>
                        <Link href="/contact/" className='text-gray-700 hover:text-blue-600'>Contacts</Link>
                        <LogoutButton />
                    </>
                ) : (
                    <>
                        <Link href="/login" className='text-gray-700 hover:text-blue-600'>Login</Link>
                        <Link href="/register" className='text-gray-700 hover:text-blue-600'>Register</Link>
                    </>
                )}
            </div>
        </div>

    </nav>
  )
}
