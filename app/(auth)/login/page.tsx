import React from 'react'
import styles from './login.module.css'
import LoginForm from '@/app/_components/LoginForm'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <div className="mx-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6"> Login </h1>
        <LoginForm />
        <p className="mt-4 text-sm text-gray-600">
            Don't have an account? <Link href="/register" className="text-blue-600 hover:underline">Register here</Link>
        </p>
    </div>
  )
}
