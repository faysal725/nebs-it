import React from 'react'

export default function Footer() {
  return (
    <main className=' md:-mt-9 relative z-20'>
        <section className='flex flex-col md:flex-row items-start md:justify-between gap-2 max-w-7xl mx-auto p-2'>
            <div className='text-sm text-white'>
            © 2024 HomeownersBenifit. All rights reserved
            </div>
            <ul className='list-none flex items-center justify-end text-sm text-white gap-3'>
                <li>Terms</li>
                <li>|</li>
                <li>Privacy Policy</li>
                <li>|</li>
                <li>Licence Information</li>
            </ul>
        </section>
    </main>
  )
}
