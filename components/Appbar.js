import React,{useState} from 'react'
import Link from "next/link"
import { Navbar } from 'flowbite-react'

const Appbar = (props) => {
  return (
    <div>
        <div>
        <Navbar
  fluid={true}
  rounded={true}
>
  <Navbar.Brand
href='/'
  >
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      Chesstune
    </span>
  </Navbar.Brand>
  <Navbar.Toggle />
  <Navbar.Collapse>
    <Navbar.Link
      href="/home"
      active={true}
    >
      Home
    </Navbar.Link>
    <Navbar.Link
      
      href="/puzzles"
    >
      Puzzles
    </Navbar.Link>
    <Navbar.Link href="/learn">
      Learn
    </Navbar.Link>
    <Navbar.Link href="/register">
      Register
    </Navbar.Link>

  </Navbar.Collapse>
</Navbar>
        </div>
        <div>
{props.children}
        </div>
    </div>
  )
}

export default Appbar