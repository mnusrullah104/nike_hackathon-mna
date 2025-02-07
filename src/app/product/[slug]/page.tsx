"use client";

import { client } from "@/sanity/lib/client";
import { Product } from "@/types/products";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: { slug: string };
}

// Fetch product data
async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      productName,
      _type,
      image,
      price,
      description,
      slug
    }`,
    { slug }
  );
}

// Static Params Generation
export async function generateStaticParams() {
  const products: { slug: { current: string } }[] = await client.fetch(
    groq`*[_type == "product"]{
      slug
    }`
  );

  return products.map((product) => ({ slug: product.slug.current }));
}

// Page Component
export default async function ProductPage({ params }: ProductPageProps) {
  if (!params || !params.slug) {
    return notFound();
  }

  const product = await getProduct(params.slug);

  if (!product) {
    return <div className="text-center text-red-500">Product not found</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row bg-blue-100 p-5 rounded-lg shadow-md max-w-6xl mx-auto">
        {/* Product Image */}
        <div className="aspect-square w-full max-w-md">
          {product.image && (
            <Image
              src={urlFor(product.image).url() as string}
              alt={product.productName || "Product image"}
              width={450}
              height={400}
              className="object-contain rounded-lg shadow-md"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 md:pl-5 pt-5 md:pt-0 flex flex-col justify-center ml-5">
          <h2 className="font-poppins text-3xl md:text-4xl font-medium text-gray-900">
            {product.productName}
          </h2>
          <p className="font-poppins text-sm text-gray-900 my-2 leading-5">
            {product.description}
          </p>
          <div className="flex flex-col sm:flex-row items-start sm:items-center mt-5 gap-4 sm:gap-0">
            <span className="font-poppins text-2xl md:text-3xl font-medium text-gray-900 sm:mr-5">
              $ {product.price}
            </span>
            <button
              type="button"
              className="w-full sm:w-auto bg-gray-900 hover:bg-gray-700 text-white py-2 px-5 rounded-full flex items-center justify-center snipcart-add-item"
              data-item-id={product._id}
              data-item-price={product.price}
              data-item-image={product.image ? urlFor(product.image).url() : ""}
              data-item-name={product.productName}
              data-item-description={product.description}
              data-item-url={`/product/${product.slug.current}`}
            >
              <Image src="/Buy-Cart.png" alt="Cart Icon" width={29} height={29} />
              <span className="ml-2">Add To Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
