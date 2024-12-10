import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

function Blog() {
  return (
<section className="py-10">
        <h2 className="text-2xl text-center font-bold">Our Blogs</h2>
        <p className="mt-2 text-lg text-center text-gray-400">Find a brightalskjfkasljflkasjflkasjfaslkfj</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10 mt-6">
          <div className="text-center">
            <Image
              src="/hsofa.png"
              alt="Hero Chair"
              width={500}
              height={500}
              className="mt-6 "
            />
            <p className="mt-2 text-lg">Going all-in with millennial design</p>
            <Link href="/" className="text-blue-500 underline">Read More</Link>
          </div>
          <div className="text-center">
            <Image
              src="/hsofa.png"
              alt="Hero Chair"
              width={500}
              height={500}
              className="mt-6 "
            />
            <p className="mt-2 text-lg">Going all-in with millennial design</p>
            <Link href="/" className="text-blue-500 underline">Read More</Link>
          </div>
          <div className="text-center">
            <Image
              src="/hsofa.png"
              alt="Hero Chair"
              width={500}
              height={500}
              className="mt-6 "
            />
            <p className="mt-2 text-lg">Going all-in with millennial design</p>
            <Link href="/" className="text-blue-500 underline">Read More</Link>
          </div>

        </div>
        <div className="text-2xl font-bold border-b-2 border-black text-center  w-[200px] mx-auto my-4   ">View all now</div>
      </section>  )
}

export default Blog