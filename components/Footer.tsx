import React from 'react'

const Footer = () => {
  return (
    <footer className='flex items-center justify-center py-4'>
      <div className='text-secondary'>
        &copy; {new Date().getFullYear()} - Handcrafted by Value1.in
      </div>
    </footer>
  )
}

export default Footer
