import React from 'react'
import Image from 'next/image';
function Top() {
  return (
   
   <section className="py-10">
   <h2 className="text-2xl text-center font-bold">Top Picks For You</h2>
   <p className="text-center text-gray-600">
     Find a bright idea to suit your taste with our great selection of furniture.
   </p>
   <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-10 mt-6">
     <div className="text-center">
       <Image
         src="/hsofa.png"
         alt="Hero Chair"
         width={500}
         height={500}
         className="mt-6 "
       />

       <p className="mt-2">Trenton Modular Sofa</p>
       <p className="text-gray-500">Rs. 25,000.00</p>
     </div>
     <div className="text-center">
       <Image
         src="/hsofa.png"
         alt="Hero Chair"
         width={500}
         height={500}
         className="mt-6 "
       />

       <p className="mt-2">Trenton Modular Sofa</p>
       <p className="text-gray-500">Rs. 25,000.00</p>
     </div>
     <div className="text-center">
       <Image
         src="/hsofa.png"
         alt="Hero Chair"
         width={500}
         height={500}
         className="mt-6 "
       />

       <p className="mt-2">Trenton Modular Sofa</p>
       <p className="text-gray-500">Rs. 25,000.00</p>
     </div>
     <div className="text-center">
       <Image
         src="/hsofa.png"
         alt="Hero Chair"
         width={500}
         height={500}
         className="mt-6 "
       />
       <p className="mt-2">Granite Dining Table</p>
       <p className="text-gray-500">Rs. 25,000.00</p>
     </div>
   </div>
 </section>
  )
}

export default Top