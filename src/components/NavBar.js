import React from "react"
import { Link } from "react-scroll"

const NavBar = () => {
  const navOptions = ["home", "about us", "services", "portfolio", "contact us"]

  return (
    <nav className="flex justify-between mb-10 py-5 pb-0">
      <div className="">
        <img src="/img/brand/logoOnly.png" alt="logo" className="object-contain h-20" />
      </div>
      <ul className="flex items-center gap-5 capitalize ">
        {navOptions.map((option, index) => (
          <Link
            key={index}
            activeClass="active"
            to={option}
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            /* onSetActive={handleSetActive} */ className={option === "contact us" ? "btn-primary" : "p-2 font-semibold whitespace-nowrap"}
          >
            {option}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
