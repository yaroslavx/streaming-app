import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'

import { getDatabase, ref, set } from "firebase/database";
import { doc, getDocs, setDoc } from "firebase/firestore"; 


import { useRouter } from 'next/router'
import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { auth, colRef, db } from '../firebase'

const AuthContext = createContext<IAuth>({
  user: null,
  signUp: async () => { },
  signIn: async () => { },
  logout: async () => { },
  error: null,
  loading: false,
})

interface AuthProviderProps {
  children: React.ReactNode
}

interface IAuth {
  user: User | null
  signUp: (email: string, password: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  error: string | null
  loading: boolean
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState(null)
  const [initialLoading, setInitialLoading] = useState(true)
  const router = useRouter()


  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // Logged in...
          setUser(user)
          setLoading(false)
        } else {
          // Not logged in...
          setUser(null)
          setLoading(true)
          router.push('/login')
        }

        setInitialLoading(false)
      }),
    [auth]
  )


  const signUp = async (email: string, password: string) => {
    setLoading(true)

    await createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user)
      router.push('/')
      setLoading(false)
    }).catch(e => alert(e.message)).finally(() => setLoading(false))
  }

  const signIn = async (email: string, password: string) => {
    setLoading(true)
    
    
    await signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      setUser(userCredential.user)
      router.push('/')

      setLoading(false)
    }).catch(e => alert(e.message)).finally(() => setLoading(false))
  }

  const logout = async () => {
    setLoading(true)

    signOut(auth).then(() => {
      setUser(null)
    }).catch(e => alert(e.message)).finally(() => setLoading(false))
  }

  const memoedValue = useMemo(() => ({
    loading, user, signIn, signUp, logout, error
  }), [loading, user, error])

  return <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
}



export default function useAuth() {
  return useContext(AuthContext)
}