"use client";
import Link from "next/link";
import { allproducts, four } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Ensure client is properly imported
import { urlFor } from "@/sanity/lib/image"; // Import urlFor function

const AllProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(allproducts);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-6 text-center">Best of Air Max</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product._id} className=" p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out">
           <Link href={`/product/${product.slug.current}`}>
           {product.image &&(
                <Image
                src={urlFor(product.image).url()}
                alt="image"
                width={300}
                height={300}
                className="w-full h-48  object-cover rounded-lg"
                />
           )}
           <h1 className="text-lg font-semibold text-blue-700 mt-4">
             {product.productName}
             </h1>
          <p className="text-gray-900 mt-2">
             {product.price? `$${product.price}` : "Price not available"}
          </p>
          {/* <p className="text-sm text-gray-700 mt-2">{product.description}</p> */}
          </Link> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;





// "use client";

// import { allproducts} from "@/sanity/lib/queries";
// import { Product } from "@/types/products";
// import Image from "next/image";
// import React, { useEffect, useState } from "react";
// import { client } from "@/sanity/lib/client"; // Ensure client is properly imported
// import { urlFor } from "@/sanity/lib/image"; // Import urlFor function

// const AllProducts = () => {
//   const [products, setProducts] = useState<Product[]>([]);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         const fetchedProducts: Product[] = await client.fetch(allproducts);
//         setProducts(fetchedProducts);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     }

//     fetchProducts();
//   }, []);

//   return (
//     <div className="max-w-6xl mx-auto px-4 py-8">
//             <h1 className="text-2xl font-bold mb-6 text-center">Our Latest Product</h1>
    
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.map((product) => (
//               <div key={product._id} className=" p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out">
                
//                {product.image &&(
//                     <Image
//                     src={urlFor(product.image).url() as string}
//                     alt="image"
//                     width={300}
//                     height={300}
//                     className="w-full h-48 object-cover rounded-md"
//                     />
//                )}
//                <h1 className="text-lg font-semibold mt-4">
//                  {product.productName}
//                  </h1>
//               <p className="text-gray-500 mt-2">
//                  {product.price? `$${product.price}` : "Price not available"}
//               </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       );
//     };
    
// export default AllProducts;
