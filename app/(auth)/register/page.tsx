import React from 'react'
import RegisterForm from '@/app/_components/RegisterForm'

export default function RegisterPage() {
  return (
    <div className="mx-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6"> Register </h1>
        <RegisterForm />
    </div>
  )
}