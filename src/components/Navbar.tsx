"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
      } else {
        setUser(data?.user);
      }
    };
    
    fetchUser();
  }, []);
  console.log(user)

  return (
    <nav className="flex py-2 px-10 border-b border-accent justify-between items-center">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={60} height={60} />
      </Link>
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
      </ul>
      {user ? (
        <div className="flex gap-2 items-center">
          <Link href="/dashboard">
          <button className="py-1 px-5 bg-primary rounded-full duration-200 shadow-[3px_3px_#000] hover:shadow-[3px_4px_#000]">
            Dashboard
          </button>
        </Link>
        <p>{user.user_metadata.name} </p>
        </div>
      ) : (
        <Link href="/login">
          <button className="py-1 px-5 bg-primary rounded-full duration-200 shadow-[3px_3px_#000] hover:shadow-[3px_4px_#000]">
            Sign up
          </button>
        </Link>
      )}
    </nav>
  );
};

export default Navbar;