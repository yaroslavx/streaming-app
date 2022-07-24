import { CheckIcon } from '@heroicons/react/solid'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import useAuth from '../hooks/useAuth'
import Table from '../components/Table'
import { getAuth } from "firebase/auth";
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import useSubscription from '../hooks/useSubscription'
import { useRouter } from 'next/router'

interface Props {
    subscriptionCallback: Function
}

function Plans({ subscriptionCallback }: Props) {
    const router = useRouter()

    const listOfPlans = ["Basic", "Standart", "Premium"]
    const [selectedPlan, setSelectedPlan] = useState("Premium")

    const { logout } = useAuth()

    return (
        <div>
            <Head>
                <title>Plans</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className='border-b border-white/10 bg-[#141414]'>
                <Link href="/">
                    <img
                        src="https://see.fontimg.com/api/renderfont4/8MmAn/eyJyIjoiZnMiLCJoIjoxNzQsInciOjIwMDAsImZzIjo4NywiZmdjIjoiI0RBMjAzQyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/c3RyZWFt/lowball-neue-medium.png"
                        width={100}
                        height={100}
                        className="cursor-pointer object-contain"
                    />
                </Link>
                <button className='text-lg font-medium hover:underline' onClick={logout}>Sign out</button>
            </header>
            <main className="pt-28 max-w-5xl mx-auto px-5 pb-12 transition-all md:px-10">
                <h1 className="mb-3 text-3xl font-medium">Choose the plan that's right for you</h1>
                <ul>
                    <li className="flex items-center gap-x-2 text-lg">
                        <CheckIcon className="h-7 w-7 text-[#da1f3b]" /> Watch all you want.
                        Ad-free.
                    </li>
                    <li className="flex items-center gap-x-2 text-lg">
                        <CheckIcon className="h-7 w-7 text-[#da1f3b]" /> Recommendations
                        just for you.
                    </li>
                    <li className="flex items-center gap-x-2 text-lg">
                        <CheckIcon className="h-7 w-7 text-[#da1f3b]" /> Change or cancel
                        your plan anytime.
                    </li>
                </ul>
                <div className='flex flex-col mt-4 space-y-4'>
                    <div className='flex w-full items-center justify-center self-end md:w-3/5'>
                        <div key={1} className={`planBox ${selectedPlan === "Basic" ? 'opacity-100' : 'opacity-50'}`} onClick={() => setSelectedPlan("Basic")}>
                            Basic
                        </div>
                        <div key={2} className={`planBox ${selectedPlan === "Standart" ? 'opacity-100' : 'opacity-50'}`} onClick={() => setSelectedPlan("Standart")}>
                            Standard
                        </div>
                        <div key={3} className={`planBox ${selectedPlan === "Premium" ? 'opacity-100' : 'opacity-50'}`} onClick={() => setSelectedPlan("Premium")}>
                            Premium
                        </div>
                    </div>
                    <Table selectedPlan={selectedPlan} />
                    <Link href="/">
                        <button
                            className={`mx-auto w-11/12 rounded bg-[#da1f3b] py-4 text-xl shadow hover:bg-[#da1f3b]/90 md:w-[420px]`}
                            onClick={() => {setDoc(doc(db, 'users', `${getAuth().currentUser?.uid}`), { selectedPlan, "subscription": true, "email": `${getAuth().currentUser?.email}`});  router.push('/')}}
                        >
                            Subscribe
                        </button>
                    </Link>
                </div>
            </main>
        </div>
    )
}

export default Plans