import { Link } from "react-scroll"
import { useRef, useEffect, useState } from "react"
import { Blurhash } from "react-blurhash"

const Header = () => {
  const heroImage = useRef()
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <section id="hero" className="bg-gray-100 ">
      <div className="container flex flex-col md:flex-row gap-5 items-center pr-4 py-14 pt-20 mx-auto">
        <div className="flex-[1] lg:flex-1 order-last md:order-first animate-slide-in">
          <h1 className="capitalize font-bold text-3xl sm:text-5xl mb-4">software solutions for ambitious ideas</h1>
          <h2 className="font-semibold text-[var(--clr-text-secondary)] text-2xl mb-10">
            Unleashing the power of code to transform your vision to reality.
          </h2>
          <Link to="get-in-touch" offset={-200} className="btn-primary">
            get in touch
          </Link>
        </div>
        <div className="img-outline-right flex-1 order-first md:order-last animate-slide-in2 z-10 self-stretch  bg-gray-300">
          <img
            ref={heroImage}
            src="/img/stock/tinified/twopeople.jpg"
            alt=""
            className={`hero-image w-full h-full object-cover ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            onLoad={() => {
              setImageLoaded(true)
            }}
          />

          {!imageLoaded && (
            <div className="absolute inset-0">
              <Blurhash hash="LUF~aT.A.AkD_3ROawROyDaJS5ae" width={"100%"} height={"100%"} />
            </div>
          )}
        </div>
      </div>

      <input></input>
    </section>
  )
}

export default Header
