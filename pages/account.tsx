import { IdentificationIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Link from 'next/link'
import { FaRegSmileBeam, FaSmileBeam, FaSmileWink } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'
import useSubscription from '../hooks/useSubscription'

function Account() {

  const { user, logout } = useAuth()
  const plan = useSubscription(user);

  return (
    <div>
      <Head>
        <title>Account</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Link href="/">
          <img
            src="https://see.fontimg.com/api/renderfont4/8MmAn/eyJyIjoiZnMiLCJoIjoxNzQsInciOjIwMDAsImZzIjo4NywiZmdjIjoiI0RBMjAzQyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/c3RyZWFt/lowball-neue-medium.png"
            width={100}
            height={100}
            className="absolute left-4 top-4 cursor-pointer object-contain transition-all lg:top-7 lg:left-11"
          />
        </Link>
        <Link href="/account">
          <FaRegSmileBeam className='h-6 w-6 absolute right-4 top-4 cursor-pointer object-contain transition-all lg:top-7 lg:right-11' />
        </Link>
      </header>
      {/* <main className='pt-24'>
        <div>
          <h1 className="text-3xl md:text-4xl">Account</h1>
        </div>
        <div>
          <h4>Plan Details</h4>
          <div>{plan}</div>
        </div>
        <button onClick={logout}>Sign Out</button>
      </main> */}


      <main className="mx-auto max-w-6xl px-5 pt-24 pb-12 transition-all md:px-10">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">

          </div>
        </div>



        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0">
          <h4 className="text-lg text-[gray]">Plan Details</h4>
          {/* Find the current plan */}
          <div className="col-span-2 font-medium">
            {plan}
          </div>
          <p
            className="cursor-pointer text-blue-500 hover:underline md:text-right"
          >
            Change plan
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0">
          <h4 className="text-lg text-[gray]">Settings</h4>
          <p
            className="col-span-3 cursor-pointer text-blue-500 hover:underline"
            onClick={logout}
          >
            Sign out of all devices
          </p>
        </div>
      </main>
    </div>
  )
}

export default Account