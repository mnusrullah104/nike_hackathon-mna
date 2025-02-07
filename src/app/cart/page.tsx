"use client";

import { Product } from "@/types/products";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          "Removed!",
          "Item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  const router = useRouter();
  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been successfully processed!",
          "success"
        );
        router.push("/check-out");
        // Clear the cart after proceeding (optional)
        setCartItems([]);
      }
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.productName}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-xl font-bold text-gray-800">
              ${calculateTotal().toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleProceed}
            className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Proceed
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

// old code

// 'use client'
// import Image from 'next/image';
// import React, { useState } from 'react';
// import Link from 'next/link';

// // Simulated product data (in a real app, this would come from state or API)
// const cartItems = [
//     {
//         id: 1,
//         name: "Nike Dri-FIT ADV TechKnit Ultra",
//         category: "Men's Short-Sleeve Running Top",
//         color: "Ashen Slate/Cobalt Bliss",
//         size: "L",
//         price: 3895,
//         image: "/cart/image 1.png"
//     },
//     {
//         id: 2,
//         name: "Nike Air Max 97 SE",
//         category: "Men's Shoes",
//         color: "Flat Pewter/Light Bone/Black/White",
//         size: "8",
//         price: 16995,
//         image: "/cart/image 2.png"
//     }
// ];

// export default function Cart() {
//     const [items, setItems] = useState(cartItems);

//     // Calculate total price
//     const subtotal = items.reduce((total, item) => total + item.price, 0);
//     const deliveryFee = subtotal >= 14000 ? 0 : 500;
//     const total = subtotal + deliveryFee;

//     // Remove item from cart
//     const removeItem = (id: number) => {
//         setItems(items.filter(item => item.id !== id));
//     };

//     return (
//         <div className="min-h-screen bg-white flex items-center justify-center px-4 py-8">
//             <div className="max-w-6xl w-full bg-white">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//                     {/* Bag Items Section */}
//                     <div className="md:col-span-2">
//                         <h2 className="text-2xl font-bold mb-6">Bag</h2>

//                         {items.map((item) => (
//                             <div
//                                 key={item.id}
//                                 className="flex flex-col md:flex-row items-center justify-between border-b pb-4 mb-4 space-y-4 md:space-y-0"
//                             >
//                                 <div className="flex flex-col md:flex-row items-center space-x-4">
//                                     <Image
//                                         src={item.image}
//                                         alt={item.name}
//                                         width={150}
//                                         height={150}
//                                         className="rounded-lg object-cover"
//                                     />
//                                     <div className="text-center md:text-left">
//                                         <h3 className="font-medium text-gray-800">{item.name}</h3>
//                                         <p className="text-sm text-gray-600">{item.category}</p>
//                                         <p className="text-sm text-gray-500">{item.color}</p>
//                                         <p className="text-sm text-gray-500">Size: {item.size}</p>
//                                     </div>
//                                 </div>
//                                 <div className="text-center md:text-right">
//                                     <p className="font-medium">₹ {item.price.toLocaleString()}</p>
//                                     <button
//                                         onClick={() => removeItem(item.id)}
//                                         className="text-sm text-red-500 hover:underline mt-2"
//                                     >
//                                         Remove
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>

//                     {/* Summary Section */}
//                     <div className="bg-gray-100 rounded-lg p-6 border border-gray-200">
//                         <h2 className="text-lg font-bold mb-4">Summary</h2>
//                         <div className="space-y-2">
//                             <div className="flex justify-between">
//                                 <p className="text-gray-600">Subtotal</p>
//                                 <p className="font-medium">₹ {subtotal.toLocaleString()}</p>
//                             </div>
//                             <div className="flex justify-between">
//                                 <p className="text-gray-600">Estimated Delivery & Handling</p>
//                                 <p className="font-medium">
//                                     {deliveryFee === 0 ? 'Free' : `₹ ${deliveryFee.toLocaleString()}`}
//                                 </p>
//                             </div>
//                             <div className="flex justify-between text-lg font-bold border-t pt-4">
//                                 <p>Total</p>
//                                 <p>₹ {total.toLocaleString()}</p>
//                             </div>
//                         </div>
//                         <Link href="/check-out">
//                             <button
//                                 className="w-full bg-black text-white font-medium py-3 rounded-lg mt-4
//                                 hover:bg-gray-800 transition-colors duration-300"
//                             >
//                                 Member Checkout
//                             </button>
//                         </Link>
//                     </div>
//                 </div>

//                 {/* Free Delivery Section */}
//                 <div className="mt-6 text-center md:text-left text-sm text-gray-500">
//                     Free Delivery applies to orders of ₹ 14,000.00 or more.{' '}
//                     <Link href="#" className="text-blue-500 hover:underline">
//                         View details
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }
