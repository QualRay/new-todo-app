import React from 'react'

export default function Footer() {
    const CURR_YEAR = new Date().getFullYear();
    return (
        <div className='bg-black text-white p-4 text-center flex justify-center'>
            <div className='flex flex-col'>
                <p>Copyright &copy; {CURR_YEAR}</p>
                <p> Tansenberg LLC </p>
            </div>
        </div>
    )
}
