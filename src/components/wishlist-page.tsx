"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/Button";
import { inter, poppins } from "@/app/ui/font";
import { Product } from "@/types/products";
import { client } from "@/sanity/lib/client";
import { allproducts as allProductsQuery } from "../sanity/lib/queries";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";

export default function WishlistPage() {
  const router = useRouter();
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [recommendedItems, setRecommendedItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchWishlistItems = () => {
      const items = JSON.parse(localStorage.getItem("wishlist") || "[]");
      setWishlistItems(items);
    };

    fetchWishlistItems();
    fetchRecommendedItems();
  }, []);

  const fetchRecommendedItems = async () => {
    const products: Product[] = await client.fetch(allProductsQuery);
    setRecommendedItems(products.slice(0, 4)); // Get only 4 products for recommendation
  };

  const handleRemoveFromWishlist = (productId: string) => {
    const updatedWishlist = wishlistItems.filter((item) => item._id !== productId);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setWishlistItems(updatedWishlist);
    toast.success("Item removed from wishlist");
  };

  const handleAddToCart = (product: Product) => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    cartItems.push(product);
    localStorage.setItem("cart", JSON.stringify(cartItems));
    toast.success(`${product.name} added to cart!`);
  };

  const handleMoveAllToBag = () => {
    const cartItems = JSON.parse(localStorage.getItem("cart") || "[]");
    const updatedCart = [...cartItems, ...wishlistItems];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.removeItem("wishlist");
    setWishlistItems([]);
    toast.success("All items moved to cart!");
  };

  return (
    <div className={`${inter.className} min-h-screen bg-white`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex justify-between items-center mb-10">
          <h1 className={`${poppins.className} text-2xl font-medium`}>
            Wishlist ({wishlistItems.length})
          </h1>
          {wishlistItems.length > 0 && (
            <Button
              variant="outline"
              className="h-12 px-12 rounded-sm border-black hover:bg-black hover:text-white transition-colors"
              onClick={handleMoveAllToBag}
            >
              Move All To Bag
            </Button>
          )}
        </div>

        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {wishlistItems.map((item) => (
              <ProductCard
                key={item._id}
                item={item}
                isWishlistItem={true}
                onRemove={() => handleRemoveFromWishlist(item._id)}
                onAddToCart={() => handleAddToCart(item)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-medium mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-gray-600">
              Add items to your wishlist to see them here.
            </p>
          </div>
        )}

        <div className="space-y-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h2 className={`${poppins.className} text-2xl font-medium`}>
                Just For You
              </h2>
            </div>
            <Button
              variant="outline"
              className="h-12 px-12 rounded-sm border-black hover:bg-black hover:text-white transition-colors"
              onClick={() => router.push("products")}
            >
              See All
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {recommendedItems.map((item) => (
              <ProductCard key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}