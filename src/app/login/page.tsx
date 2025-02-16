"use client"
import {supabase} from '@/lib/supabase'
import React from 'react'

const Loginpage = () => {

    const LoginGoogle = async () => {
        const {data , error} = await supabase.auth.signInWithOAuth({
            provider: "google"
        })
        if (error) {
            console.error(error)
        }
        if(data){
            console.log(data)
        }
    }

  return (
    <div className='h-screen w-full flex items-center justify-center'>
      <div className='bg-gray-200 rounded-xl mx-auto p-4'>
            <button className='bg-background hover:bg-slate-100 font-bold w-[300px] py-2 rounded-2xl' onClick={LoginGoogle}>Login with google</button>
      </div>
    </div>
  )
}

export default Loginpage
