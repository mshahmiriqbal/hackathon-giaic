import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
function Feature() {
  return (
    
     <section className="bg-gray-50 py-10 ml-[400px]">
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-10">
       <div className="text-center gap-[100px]">
         <Image src="/hsofa.png" alt="Side Table" width={200} height={200} />
         <p className="mt-2 text-lg">Side Table</p>
         <Link href="/" className="text-blue-500 underline">View More</Link>
       </div>
       <div className="text-center">
         <Image src="/hsofa.png" alt="Side Chair" width={200} height={200} />
         <p className="mt-2 text-lg">Side Chair</p>
         <Link href="/" className="text-blue-500 underline">View More</Link>
       </div>
     </div>
   </section>
  )
}

export default Feature