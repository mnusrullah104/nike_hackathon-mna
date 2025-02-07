import Image from "next/image";
import Link from "next/link";

export default function DontMissSection() {
  return (
    <section className="my-16 px-4">
      <div className="container mx-auto">
        <h1 className="font-semibold text-xl mb-4 text-center md:text-left">
          Don&apos;t Miss
        </h1>
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[90vh] md:mb-8">
          <Image
            src="/HeroSection/image9.png"
            alt="flight"
            width={1344}
            height={700}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-center items-center space-y-5 text-center">
          <h1 className="font-semibold text-2xl md:text-4xl">
            FLIGHT ESSENTIALS
          </h1>
          <h2 className="text-xs md:text-sm text-gray-600 max-w-md">
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </h2>
          <Link href="/all-products">
            <button className="bg-black rounded-2xl text-white px-6 py-2 hover:bg-gray-800 transition">
              Shop
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}