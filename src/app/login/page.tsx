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
      <div className='bg-gray-200 mx-auto p-8 h-2/4 w-2/4'>
            <button className='bg-black text-white py-1 rounded-2xl' onClick={LoginGoogle}>Login with google</button>
      </div>
    </div>
  )
}

export default Loginpage
