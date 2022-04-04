import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <header>
        <Image 
            className='object-contain'
            src='https://links.papareact.com/ua6'
            width={200}
            height={100}
            alt=''
        />
    </header>
  )
}

export default Header