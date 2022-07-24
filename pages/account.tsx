import { IdentificationIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Link from 'next/link'
import { FaRegSmileBeam, FaSmileBeam, FaSmileWink } from 'react-icons/fa'
import useAuth from '../hooks/useAuth'
import useSubscription from '../hooks/useSubscription'
import { useRouter } from 'next/router'
import { getAuth } from 'firebase/auth'

function Account() {
  const router = useRouter()
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
          <div className='h-fit w-fit absolute right-4 top-4 transition-all lg:top-7 lg:right-11'>{getAuth().currentUser?.email}</div>
        </Link>
      </header>
      <main className="mx-auto max-w-6xl px-5 pt-24 pb-12 transition-all md:px-10 ">
        <div className="flex flex-col gap-x-4 md:flex-row md:items-center">
          <h1 className="text-3xl md:text-4xl">Account</h1>
          <div className="-ml-0.5 flex items-center gap-x-1.5">

          </div>
        </div>



        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0 md:pb-0  items-center">
          <h4 className="text-lg text-[gray]">Plan Details</h4>
          <div className="col-span-2 font-medium">
            {plan}
          </div>
          <p className="cursor-pointer text-blue-500 hover:underline md:text-right md:mr-3" onClick={() => router.push("/plans")}>
            Change plan
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-x-4 border px-4 py-4 md:grid-cols-4 md:border-x-0 md:border-t md:border-b-0 md:px-0  items-center">
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