"use client"
import React from 'react'
import { registerAction } from '../actions/auth'

type Props = {}

export default function RegisterForm({}: Props) {
  return (
    <form action={registerAction} className='space-x-4'>
        <div>
            <label className='block text-sm font-medium text-gray-700'>Name</label>
            <input type="text" name="name" required placeholder='Enter your name' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:test-sm p-2'/>
        </div>
        <div className='mt-5'>
            <label className='block text-sm font-medium text-gray-700'>Email</label>
            <input type="email" name="email" required placeholder='Enter your email' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:test-sm p-2'/>
        </div>
        <div className='mt-5'>
            <label className='block text-sm font-medium text-gray-700'>Password</label>
            <input type="text" name="password" required placeholder='Enter your password' className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:test-sm p-2'/>
        </div>
        <button type="submit" className='w-full flex justify-center py-2 px-4 border border-transparent mt-5 bg-blue-600 text-white'>Register</button>
    </form>
  )
}