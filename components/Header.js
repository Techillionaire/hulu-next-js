import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import {
  BadgeCheckIcon,
  HomeIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon
} from '@heroicons/react/outline'

const Header = () => {
  return (
    <header>

      <div>
        <HeaderItem title='HOME' Icon={HomeIcon} />
      </div>
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