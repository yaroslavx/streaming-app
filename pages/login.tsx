import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form";
import loginbg from '../assets/loginbg.jpg'
import useAuth from "../hooks/useAuth";

interface Inputs {
  email: string
  password: string
}

function Login() {
  const { register, handleSubmit , formState: { errors } } = useForm<Inputs>();
  const [login, setLogin] = useState(false)
  const {signIn, signUp} = useAuth()

  const onSubmit: SubmitHandler<Inputs> = async ({email, password}) => {
    login ? await signIn(email, password) : await signUp(email, password)
  };

  return (
    <div className="relative flex flex-col w-screen h-screen bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
        <title>Login</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
      src={loginbg}
      layout='fill'
      className="-z-10 !hidden opacity-60 sm:!inline"
      objectFit="cover"
      />
      <img
          src="https://see.fontimg.com/api/renderfont4/8MmAn/eyJyIjoiZnMiLCJoIjoxNzQsInciOjIwMDAsImZzIjo4NywiZmdjIjoiI0RBMjAzQyIsImJnYyI6IiNGRkZGRkYiLCJ0IjoxfQ/c3RyZWFt/lowball-neue-medium.png"
          width={100}
          height={100}
          className="absolute left-4 top-4 cursor-pointer object-contain lg:top-7 lg:left-11"
        />

        <form onSubmit={handleSubmit(onSubmit)} className="relative space-y-8 mt-24 rounded py-11 px-7 md:mt-0 md:max-w-md md:px-14">
          <h1 className="text-4xl font-semibold">Sign in</h1>
          <div className="space-y-4">
            <label className="inline-block w-full">
              <input type="email" placeholder="Email" className="input" {...register("email", { required: true })}/>
              {errors.email && (
              <p className="text-sm  text-white">
                Please enter a valid email.
              </p>
            )}
            </label>
            <label className="inline-block w-full">
              <input type="password" placeholder="Password" className="input" {...register("password", { required: true })}/>
              {errors.password && (
              <p className="text-sm  text-white">
                Your password must contain between 4 and 60 characters.
              </p>
            )}
            </label>
          </div>
          <button className="w-full rounded bg-[#da1f3b] py-3 font-semibold" onClick={() => setLogin(true)}>Sign in</button>

          <div className="text-[gray]">
            New to Stream?{' '}
            <button type="submit" className="text-white hover:underline" onClick={() => setLogin(false)}>Sign up now</button>
          </div>
        </form>
    </div>
  )
}

export default Login 