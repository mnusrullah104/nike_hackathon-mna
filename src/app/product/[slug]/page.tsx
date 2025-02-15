import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { groq } from 'next-sanity'
import { client } from '@/sanity/lib/client'
import { urlFor } from '@/sanity/lib/image'
import { Button } from '@/components/ui/button'
import AddToCartButton from '@/components/AddToCart'
import { Star, Truck, ArrowRight } from 'lucide-react'
import { Product } from '@/types/products'

interface ProductPageProps {
  params: Promise<{ slug: string }> // Wrap params in Promise
}

async function getProduct(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == "product" && slug.current == $slug][0]{
      _id,
      _type,
      name,
      image,
      price,
      originalPrice,
      description,
      sizes,
      "slug": slug.current,
      category,
      stock_quantity,
      rating,
      reviews,
      tags
    }`,
    { slug }
  )
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params 
  const product = await getProduct(slug)

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: product.name,
    description: product.description,
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params // Resolve the promise to get slug
  const product = await getProduct(slug)

  if (!product) {
    notFound()
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-blue-100 gap-12">
        {/* Product Image */}
        <div className="aspect-square relative overflow-hidden m-5 shadow-md  rounded-lg bg-gray-100">
          {product.image && (
            <Image
              src={urlFor(product.image).width(450).height(400).url()}
              alt={"product-image"}

              fill
              className="object-cover"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col gap-8">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          
          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-6 h-6 ${
                    i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-lg text-gray-600">({product.reviews} reviews)</span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-red-600">${product.price}</span>
            {product.originalPrice && product.originalPrice > product.price && (
              <span className="text-xl text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>

          {/* Description */}
          <p className="text-lg text-gray-700">{product.description}</p>

          {/* Sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-3">Select Size</h3>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <Button key={size} variant="outline" className="px-6 py-3 text-lg">
                    {size}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <AddToCartButton product={product} />

          {/* Additional Info */}
          <div className="border-t border-gray-200 pt-6 space-y-4">
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <Truck className="w-6 h-6 text-green-500" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center gap-3 text-lg text-gray-700">
              <ArrowRight className="w-6 h-6 text-green-500" />
              <span>30-day hassle-free return policy</span>
            </div>
          </div>

          {/* Tags */}
          {product.tags && product.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span key={tag} className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}














// import { client } from "@/sanity/lib/client";
// import { Product } from "@/types/products";
// import { groq } from "next-sanity";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import { notFound } from "next/navigation";

// // Define the ProductPageProps interface
// interface ProductPageProps {
//   params: { slug: string };
// }

// // Fetch product data
// async function getProduct(slug: string): Promise<Product | null> {
//   return client.fetch(
//     groq`*[_type == "product" && slug.current == $slug][0]{
//       _id,
//       productName,
//       _type,
//       image,
//       price,
//       description,
//       slug
//     }`,
//     { slug }
//   );
// }

// // Static Params Generation
// export async function generateStaticParams() {
//   const products: { slug: { current: string } }[] = await client.fetch(
//     groq`*[_type == "product"]{
//       slug
//     }`
//   );

//   return products.map((product) => ({ slug: product.slug.current }));
// }

// // ✅ This remains a server component (No "use client"; at the top)
// export default async function ProductPage({ params }: ProductPageProps) {
//   if (!params || !params.slug) {
//     return notFound();
//   }

//   const product = await getProduct(params.slug);

//   if (!product) {
//     return <div className="text-center text-red-500">Product not found</div>;
//   }

//   return (
//     <div className="max-w-7xl mx-auto px-4">
//       <div className="flex flex-col md:flex-row bg-blue-100 p-5 rounded-lg shadow-md max-w-6xl mx-auto">
//         {/* Product Image */}
//         <div className="aspect-square w-full max-w-md">
//           {product.image && (
//             <Image
//               src={urlFor(product.image).url() as string}
//               alt={product.name || "Product image"} // Fixed: Changed `name` to `productName`
//               width={450}
//               height={400}
//               className="object-contain rounded-lg shadow-md"
//             />
//           )}
//         </div>

//         {/* Product Details */}
//         <div className="flex-1 md:pl-5 pt-5 md:pt-0 flex flex-col justify-center ml-5">
//           <h2 className="font-poppins text-3xl md:text-4xl font-medium text-gray-900">
//             {product.name} {/* Fixed: Changed `name` to `productName` */}
//           </h2>
//           <p className="font-poppins text-sm text-gray-900 my-2 leading-5">
//             {product.description}
//           </p>
//           <div className="flex flex-col sm:flex-row items-start sm:items-center mt-5 gap-4 sm:gap-0">
//             <span className="font-poppins text-2xl md:text-3xl font-medium text-gray-900 sm:mr-5">
//               $ {product.price}
//             </span>
//             <button
//               type="button"
//               className="w-full sm:w-auto bg-gray-900 hover:bg-gray-700 text-white py-2 px-5 rounded-full flex items-center justify-center snipcart-add-item"
//               data-item-id={product._id}
//               data-item-price={product.price}
//               data-item-image={product.image ? urlFor(product.image).url() : ""}
//               data-item-name={product.name}
//               data-item-description={product.description}
//               data-item-url={`/product/${product.slug.current}`}
//             >
//               <Image src="/Buy-Cart.png" alt="Cart Icon" width={29} height={29} />
//               <span className="ml-2">Add To Cart</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }