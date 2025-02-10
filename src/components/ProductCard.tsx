import Image from "next/image";
import Link from "next/link";
import { Eye, Trash2 } from "lucide-react";
import { Button } from "@/components/Button";
import { Product } from "@/types/products";
import { urlFor } from "@/sanity/lib/image";

export default function ProductCard({
  item,
  isWishlistItem = false,
  onRemove,
  onAddToCart,
}: {
  item: Product;
  isWishlistItem?: boolean;
  onRemove?: () => void;
  onAddToCart?: () => void;
}) {
  return (
    <div className="group">
      <div className="relative aspect-square bg-[#F5F5F5] rounded-sm mb-4">
        {item.originalPrice && item.originalPrice > item.price && (
          <span className="absolute top-3 left-3 bg-[#DB4444] text-white text-xs px-3 py-1 rounded-sm">
            -{Math.round((1 - item.price / item.originalPrice) * 100)}%
          </span>
        )}
        {!isWishlistItem && item.tags && item.tags.includes("new") && (
          <span className="absolute top-3 left-3 bg-[#00FF66] text-black text-xs px-3 py-1 rounded-sm">
            NEW
          </span>
        )}
        {isWishlistItem ? (
          <button
            className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center"
            onClick={onRemove}
          >
            <Trash2 className="w-5 h-5" />
          </button>
        ) : (
          <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Eye className="w-5 h-5" />
          </button>
        )}
        <Link href={`/product/${item.slug.current}`}>
          {item.image && (
            <Image
              src={urlFor(item.image).url()}
              alt={item.name}
              fill
              className="object-contain p-4 cursor-pointer"
            />
          )}
        </Link>
        <div className="absolute inset-x-4 bottom-4"></div>
      </div>
      <Button
        className="w-full bg-black text-white hover:bg-black/90 h-10 rounded-sm"
        onClick={onAddToCart}
      >
        Add To Cart
      </Button>
      <h3 className="font-medium mt-2">{item.name}</h3>
      <div className="flex gap-3 mb-2">
        <span className="text-blue-700 font-medium">${item.price}</span>
        {item.originalPrice && item.originalPrice > item.price && (
          <span className="text-[#666666] line-through">
            ${item.originalPrice}
          </span>
        )}
      </div>
      {!isWishlistItem && (
        <div className="flex items-center gap-2">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(item.rating)
                    ? "text-[#FFAD33]"
                    : "text-[#666666]"
                }`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span className="text-sm text-[#666666]">({item.reviews})</span>
        </div>
      )}
    </div>
  );
}