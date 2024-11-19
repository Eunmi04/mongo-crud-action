import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className="flex justify-between items-center bg-blue-400 px-8 py-4">
      <Link href="/" className="text-white text-lg font-bold">
        MongDB CRUD
      </Link>
      <Link
        href="/addTopic"
        className="bg-white text-blue-400 text-lg font-bold px-4 py-2 rounded-md"
      >
        Add Topic
      </Link>
    </div>
  )
}
