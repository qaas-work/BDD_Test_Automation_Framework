import React, { useEffect, useState } from 'react'
import './Navbar.css'

function Navbar() {

  const navItems = [
    { name: 'Services', link: '#services' },
    { name: 'Team', link: '#team' },
    { name: 'Contact', link: '#contact' },
    { name: 'Careers', link: '#careers' },
  ]

  const [selected, setSelected] = useState(0)
  useEffect(() => { 
    console.log(selected);
  }, [selected])

  return (
    <>
      <header>
        <div className="logo">
          Logo
        </div>
        <nav className="navbar">
          <ul>
            {
              navItems.map((item, index) => {
                return (
                  <li onClick={() => setSelected(index)} key={index} > <a href={item.link} className={selected === index ? 'selected' : ''} > {item.name}</a> </li>
                )
              })
            }
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Navbar