import { NextResponse } from 'next/server'
import React from 'react'

export function GET() {
  return (
    NextResponse.json({ message: 'API is working' })
    // <div>API is working</div>
  )
}
