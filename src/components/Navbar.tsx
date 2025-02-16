"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUser(data.session?.user.user_metadata);
      }
    };
    
    fetchUser();
  }, []);
  console.log(user)

  const SignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <nav className="flex py-2 px-10 border-b border-accent justify-between items-center">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
      </Link>
      {user ? <ul className="flex items-center gap-8">
          <Link href="#features" className="font-medium hover:text-accent">
            Features
          </Link>
          <Link href="/dashboard" className="font-medium hover:text-accent">
            Dashboard
          </Link>
          <button onClick={SignOut} className="px-5 py-1 bg-primary rounded-full duration-200 shadow-[3px_3px_#000] hover:bg-secondary hover:shadow-[0px_0px_#000]">
            Logout
          </button>
          <div className="flex flex-col gap-1">
          <Image src={user?.avatar_url} alt="" height={25} width={25} className="rounded-full"/>
          <span className="text-xs font-medium text-gray-600">{user?.full_name}</span>
          </div>
      </ul> : 
      <ul className="flex gap-8">
          <Link href="/" className="font-medium hover:text-accent">
            Home
          </Link>
          <Link href="/features" className="font-medium hover:text-accent">
            Features
          </Link>
          <Link href="/pricing" className="font-medium hover:text-accent">
            Pricing
          </Link>
        <Link href="/login">
          <button className="py-1 px-5 bg-primary rounded-full duration-200 shadow-[3px_3px_#000] hover:shadow-[3px_4px_#000]">
            Sign up
          </button>
        </Link>
      </ul> 
      }
    </nav>
  );
};

export default Navbar;