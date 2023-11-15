import React, { Fragment } from "react"
import ourTeam from "./db.json"
import { useNavigate } from "react-router-dom"

const AboutUs = () => {
  const navigate = useNavigate()
  return (
    <section id="about" className="bg-gray-50  ">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-5 pr-4 py-14 pt-20 min-h-[calc(100vh_-_var(--header-height,100px))]">
          <div className="flex-[1] lg:flex-1 order-last md:order-first ">
            <h1 style={{ textAlign: "left" }} className="section-title mb-4 fade-in ">
              About Us
            </h1>
            <div className="space-y-6 text-lg">
              <p className="fade-in">
                Falcon Technologies is a forward-thinking application development company known for its technical expertise and commitment to
                excellence. We bring creativity and innovation to every project we undertake.
              </p>
              <p className="fade-in">
                Our mission is to democratize application development by providing user-friendly and powerful software solutions that enable anyone to
                create stunning applications.
              </p>
            </div>
          </div>
          <div className="flex-1 order-first md:order-last z-10 img-outline-right max-h-[350px]">
            <img src="/img/stock/tinified/code-snippets.png" alt="" className="w-full h-full object-cover object-[0_0]  " />
          </div>
        </div>
        <div className="py-12">
          <h1 className="section-title text-center mb-14 fade-in">Meet Our Team</h1>
          <div className="grid container mx-auto grid-cols-12 xl:grid-cols-10 sm:flex-row justify-around mt-5 items-stretch sm:gap-x-5 gap-y-5 flex-wrap">
            {ourTeam.teams.map((team, i) => (
              <div
                key={i}
                style={{ "--delay": `${i * 0.1}s` }}
                className="bg-white border rounded-lg overflow-hidden cursor-pointer hover:shadow-md fade-in col-span-12 sm:col-span-6 lg:col-span-3 xl:col-span-2"
                onClick={() => {
                  navigate("/team", { state: { hash: team.id } })
                }}
              >
                <div className="bg-orange-50">
                  <img
                    src={team.image}
                    // style={{ objectPosition: team["object-position"] }}
                    alt="Profile"
                    className={`w-full h-48 object-contain ${team.id === 3 ? "object-[center_30%]" : "object-center"} `}
                  />
                </div>
                <div className="p-3 text-center">
                  <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{team.name}</h2>
                  <div className="tracking-wide text-sm text-gray-400 font-semibold">{team.position}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="btn-primary mt-6 fade-in"
              onClick={() => {
                navigate("/team")
              }}
            >
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs
