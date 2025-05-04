"use client"

import Logo from "./Logo"
import SideBar from "./SideBar"
import Menu from "./Menu"
import { useState } from "react"
import Toggle from "./Toggle"
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Button } from "@/components/ui/button"

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <nav className="py-3 px-3 shadow-lg shadow-accent">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="flex gap-3">
          <SideBar open={open} setOpen={setOpen}/>
          <Logo/>
        </div>
        <Menu className="hidden lg:flex md:gap-5 md:items-center" setOpen={setOpen}/>
        <div className="hidden md:flex gap-3 text-lg items-center">
          <Toggle/>
          <SignedOut>
            <SignInButton mode="modal">
              <Button variant='outline'>
                Login
              </Button>
            </SignInButton>
            <SignUpButton mode="modal">
              <Button className="bg-[#2ADBA4] hover:bg-[#1dc791] focus-visible:bg-[#1dc791]">
                Sign Up
              </Button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <UserButton showName={true}/>
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}

export default NavBar