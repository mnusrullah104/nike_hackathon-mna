"use client";
import Link from "next/link";
import { sixProductsQuery } from "@/sanity/lib/queries";
import { Product } from "@/types/products";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client"; // Ensure client is properly imported
import { urlFor } from "@/sanity/lib/image"; // Import urlFor function
import { addToCart } from "../actions/actions";
import Swal from 'sweetalert2'
const SHOES = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const fetchedProducts: Product[] = await client.fetch(sixProductsQuery);
        setProducts(fetchedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchProducts();
  }, []);

  const handleAddToCart = (
    e: React.MouseEvent<HTMLButtonElement>,
    product: Product
  ) => {
    e.preventDefault();
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `${product.name} added to art`,
      showConfirmButton: false,
      timer: 1000
    })
    addToCart(product);
   
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Best of Air Max</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className=" p-4 border rounded-lg shadow-md hover:shadow-lg transition duration-200 ease-in-out"
          >
            <Link href={`/product/${product.slug.current}`}>
              {product.image && (
                <Image
                  src={urlFor(product.image).url()}
                  alt="image"
                  width={300}
                  height={300}
                  className="w-full h-48  object-cover rounded-lg"
                />
              )}
              <h1 className="text-lg font-semibold text-blue-700 mt-4">
                {product.name}
              </h1>
              <p className="text-gray-900 mt-2   font-medium tsm:mr-5">
                {product.price ? `$${product.price}` : "Price not available"}
              </p>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-700 font-semiboldbold shadow-md hover:shadow-lg hover:scale-110 transition-transform duration-300 ease-out text-white px-4 py-2 rounded-lg mt-4"
                onClick={(e) => handleAddToCart(e, product)}
              >
                Add to Cart 
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SHOES;
