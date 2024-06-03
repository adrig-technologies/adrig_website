"use client"

import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Logo } from "@/assets"
import { ChevronDown } from "lucide-react"
import { navbarLinks } from "@/lib/eng/navbarLinks"
import { NavbarLinksTypes } from "@/lib/types"
import InnerNavbar from "./InnerNavbar"

const Navbar = () => {
  const [selectedNavBar, setSelectedNavBar] = useState<NavbarLinksTypes | {}>(
    {} as NavbarLinksTypes
  )
  const allowedNavBar = ["AI Products", "Services", "Industries"]

  const selectedNavBarChangeHandler = (list: NavbarLinksTypes) => {
    setSelectedNavBar(list)
  }

  const handleSelectedNavBarLeave = () => {
    selectedNavBarChangeHandler({} as NavbarLinksTypes)
  }

  return (
    <section className="sticky top-0 w-full bg-white/40 z-50 backdrop-blur-lg py-4 px-16 ease-in-out duration-500">
      <div className="relative flex justify-between items-center">
        <div>
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              alt="Adrig Technologies | AI Company"
              className="w-[120px] h-[72px]"
            />
            {/* <span className="text-4xl font-mono text-blue-600 font-semibold">
              Adrig
            </span> */}
          </Link>
        </div>
        <div className="flex items-center space-x-10 text-sm font-medium">
          <ul className="flex space-x-10 items-center">
            {navbarLinks.map((navList) => (
              <li
                key={navList.id}
                className="group"
                onMouseEnter={() => selectedNavBarChangeHandler(navList)}
              >
                <Link
                  className="flex flex-col items-center uppercase"
                  href={navList.url}
                >
                  <div className="flex items-center space-x-2">
                    <span>{navList.label}</span>
                    {allowedNavBar.includes(navList.label) && (
                      <ChevronDown className="w-4 stroke-1.5" />
                    )}
                  </div>
                  {!allowedNavBar.includes(navList.label) && (
                    <div className="bg-black h-[2px] w-0 group-hover:w-full transition-all duration-500"></div>
                  )}
                </Link>
              </li>
            ))}
          </ul>
          {"label" in selectedNavBar &&
            allowedNavBar.includes(selectedNavBar.label) && (
              <InnerNavbar
                navItem={selectedNavBar}
                handleSelectedNavBarLeave={handleSelectedNavBarLeave}
              />
            )}
          <button className="uppercase bg-blue-700 text-white px-4 py-2 font-medium">
            Contact Us
          </button>
        </div>
      </div>
    </section>
  )
}

export default Navbar
