import React from 'react'

type Props = {}

const Notification = (props: Props) => {
  return (
    <div className='bg-red-500 text-white px-4 flex justify-center text-sm md:text-base items-center py-4
    cursor-pointer md:py-4 h-10 text-center'>Free delivery for all orders over $50.00. Order your food NOW!</div>
  )
}

export default Notification