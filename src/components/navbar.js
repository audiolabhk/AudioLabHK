import { Link } from "gatsby"
import React from "react"

export default function Navbar() {
  return (
    <nav className="navbar">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </nav>
  )
}
