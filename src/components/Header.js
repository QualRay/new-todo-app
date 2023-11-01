import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <div className='bg-black text-white p-10 text-2xl flex justify-between' >
            <div className='text-teal-500 font-bold'>
            <Link href='/'>Logo</Link>    
            </div>
            <div className='flex px-10 gap-8'>
                <Link href='/dashboard' className=''>Dashboard</Link>
                <Link href='/account' className=''>Account</Link>
                <Link href='/user' className=''>User</Link>
            </div>
        </div>
    )
}
