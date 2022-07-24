import { useEffect, useMemo, useState } from 'react'
import { getAuth, User } from 'firebase/auth'
import { colRef } from '../firebase'
import { getDocs } from 'firebase/firestore'

function useSubscription(user: User | null) {
    const [plan, setPlan] = useState<string>('')

    useEffect(() => {
        if (!user) return

        (async function Docs() {
            await getDocs(colRef).then(res => {
                let f: { subscription: boolean }[] = []
                res.docs.forEach((doc) => {
                    if (doc.id === getAuth().currentUser?.uid) {
                        setPlan(doc.data().selectedPlan)
                    }
                })
            })
        }())

    }, [user])


    return plan
    
}

export default useSubscription