import React from "react"

const BTServices = () => {
  return (
    <section id="services" className="px-[var(--page-margin,5rem)]  py-8">
      <h1 className="section-title mb-20 fade-in">Our Services</h1>
      <div className="flex flex-col md:flex-row gap-5 items-start pr-14 pb-20">
        <div className="flex-[2] lg:flex-[2] order-last ">
          <div className="">
            <h2 id="fintech" className="section-subtitle fade-in mb-4">
              Fintech solutions
            </h2>
            <p className="fade-in">
              Falcon Technologies is a forward-thinking fintech company driven by a passion for innovation. With a commitment to delivering
              cutting-edge solutions, we have become a trusted partner for those seeking to leverage technology for busines success. Our fintech
              solution offers a wide range of financial services, including digital wallets, payment processing, and financial education.
            </p>
          </div>
        </div>
        <div className="img-outline-left flex-1 order-first 2 z-10">
          <img src="/img/stock/app.jpg" alt="" className="w-full max-h-64 object-cover object-center" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-start px-12 pr-14 py-14 pt-20">
        <div className="flex-[2] lg:flex-[2] order-last md:order-first ">
          <div className="">
            <h2 id="mobile" className="section-subtitle mb-4 fade-in">
              mobile and web app development
            </h2>
            <p className="fade-in">
              Our team of skilled developers, designers, and strategists has extensive experience in building mobile apps across various platforms and
              industries. We prioritize user experience and design, ensuring that your app is not only functional but also visually appealing and
              intuitive. We stay up to date with the latest mobile technologies and trends to provide you with the most advanced solutions.
            </p>
          </div>
        </div>
        <div className="img-outline-right flex-1 order-first md:order-last 2 z-10">
          <img src="/img/stock/programmer.jpg" alt="web development" className="w-full object-cover object-center" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-5 items-start pr-14 py-14 pt-20">
        <div className="flex-[2] lg:flex-[2] order-last ">
          <div className="">
            <h2 id="ussd" className="section-subtitle mb-4 fade-in">
              USSD Technology
            </h2>
            <p className="fade-in">
              Falcon Technologies USSD Developer is a leading USSD development company that thrives on innovation and technical excellence. With a
              deep understanding of USSD technology, we create interactive and efficient USSD solutions. Our team of USSD experts brings a wealth of
              experience in developing USSD applications across various sectors, including finance, healthcare, education, and more.
            </p>
          </div>
        </div>
        <div className="img-outline-left flex-1 order-first 2 z-10">
          <img src="/img/stock/ussd1.jpg" alt="" className="w-full object-cover object-center" />
        </div>
      </div>
    </section>
  )
}

export default BTServices
