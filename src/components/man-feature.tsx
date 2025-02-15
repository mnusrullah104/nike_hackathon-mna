
import React from 'react';
import Image from "next/image";
import Link from "next/link";  // Import Link from next/link

export default function MenBanner() {

  return (
    <div className="flex  mt-12 mb-12 flex-col items-center px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <h2 className="text-left w-full max-w-4xl text-lg font-semibold mb-4 sm:text-xl md:text-2xl lg:mb-6">
        Featured
      </h2>

      {/* Image Section */}
      <div className="w-full max-w-4xl h-[50vh] sm:h-[60vh] lg:h-[70vh] relative mb-8">
       <Image
                width={1920}
                height={1080}
                src="/HeroSection/image4.png"
                alt={"hero-banner"}
                className="object-cover w-full h-full"
                priority
              />
          
      </div>

      {/* Text and Button Section */}
      <div className="text-center max-w-2xl">
        <h1 className="text-2xl font-bold mb-2 sm:text-3xl lg:text-4xl">
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base lg:text-lg">
          Cause everyone should know the feeling of running in that perfect pair.
        </p>
        
          <Link href="/all-products" className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition text-sm sm:text-base lg:text-lg">
            Find Your Shoe
     </Link>
      </div>
    </div>
  );

};





















// import Image from "next/image";
// import Link from "next/link";  // Import Link from next/link

// export default function MenBanner() {
//   return (
//     // Corrected JSX Comment Syntax
//     <>
//       {/* New Section */}
//       <section className="relative bg-white py-16 px-4 text-center">
//         <div className="container mx-auto">
          
//           <div className="w-full max-w-4xl h-[50vh] sm:h-[60vh] lg:h-[70vh] relative mb-8">
//             <Image
//               width={1920}
//               height={1080}
//               src="/HeroSection/image4.png"
//               alt="Running Man"
//               className="object-cover w-full h-full"
//               priority
//             />
//           </div>
//           <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
//             STEP INTO WHAT FEELS GOOD
//           </h1>
//           <p className="text-base md:text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
//             Cause everyone should know the feeling of running in that perfect
//             pair!
//           </p>
//           <Link href="/all-products">
//             <button className="px-6 py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
//               Find Your Shoe
//             </button>
//           </Link>
//         </div>
//       </section>
//     </>
//   );
// }
