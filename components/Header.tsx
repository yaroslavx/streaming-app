import { BellIcon, IdentificationIcon, SearchIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'

function Header() {

  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      (window.scrollY > 0) ? setIsScrolled(true) : setIsScrolled(false)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={`${isScrolled && "bg-[#141414]"}`}>
      <div className='flex items-center space-x-2 md:space-x-10'>
        <img
          src="https://see.fontimg.com/api/renderfont4/8MmAn/eyJyIjoiZnMiLCJoIjoxNzQsInciOjIwMDAsImZzIjo4NywiZmdjIjoiI0RBMjAzQyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/c3RyZWFt/lowball-neue-medium.png"
          width={100}
          height={100}
          className="cursor-pointer object-contain"
        />

        <ul className='hidden space-x-4 md:flex'>
          <li className='headerLink'>Home</li>
          <li className='headerLink'>TV shows</li>
          <li className='headerLink'>Movies</li>
          <li className='headerLink'>New & Popular</li>
          <li className='headerLink'>My list</li>
        </ul>
      </div>
      <div className='flex items-center space-x-3 text-sm font-light'>
        <SearchIcon className='hidden sm:inline h-6 w-6 ' />
        <p className='hidden lg:inline'>Kids</p>
        <BellIcon className='h-6 w-6' />
        <Link href="/account">
          <IdentificationIcon className='h-6 w-6 cursor-pointer rounded' />
        </Link>
      </div>
    </header>
  )
}

export default Header