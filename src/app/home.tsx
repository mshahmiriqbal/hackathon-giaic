import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Home() {
  return (
    <div>
      {/* Hero Section */}
      <header className="bg-yellow-100 py-10 h-screen">
        <div className="flex ml-96  gap-6 text-centre text-black">
          <Link className=" ml-52" href="/">Home</Link>
          <Link href="/shop">Shop</Link>
          <Link href="/single">single product</Link>
          <Link href="/account">account</Link>
          <Link href="/check">checkout</Link>
          <Link href="/cntct">contact</Link>
          <Link href="/blog">our blogs</Link>
        </div>
        <nav className="flex justify-between items-center px-10">

          <div className="flex gap-4">
            <i className="fas fa-user"></i>
            <i className="fas fa-search"></i>
            <i className="fas fa-heart"></i>
            <i className="fas fa-shopping-cart"></i>
          </div>
        </nav>
        <div className="flex flex-col items-center text-center mt-10">
          <div className="flex flex-row items-center  ml-11 justify-center">
            <div className='flex flex-col'>
              <h1 className="text-4xl font-bold mr-4">Rocket single seater</h1><br />
              <div className="text-2xl font-bold mr-4 border-b-2 border-black  w-[150px]">Shop Now</div>
            </div>

            <Image
              src="/hsofa.png"
              alt="Hero Chair"
              width={500}
              height={500}
              className="mt-6 "
            />
          </div>



        </div>
      </header>
     
      

      


      

     

      


    </div>
  )
}

export default Home