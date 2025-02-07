import Image from "next/image";
import Link from "next/link";
import SHOES from "@/app/shoes/page";

export default function Hero() {
  return (
    <div className="w-full bg-stone-100">
      <section className="container mx-auto px-4 py-8">
        {/* App Download Prompt */}
        <div className="text-center mb-6">
          <h3 className="text-xl md:text-2xl text-blue-950 font-bold">Hello Nike App</h3>
          <p className="text-xs md:text-sm text-gray-600 mt-2">
            Download the app to access everything Nike.
            <br className="block md:hidden" /> {/* Line break for mobile only */}
            <Link
              href="https://play.google.com/store/apps/details?id=com.nike.omega&hl=en"
              target="_blank"
            >
              <span className="font-semibold hover:text-blue-700 text-blue-600 hover:underline underline-offset-2">
                Get Your Great
              </span>
            </Link>
          </p>
        </div>
        
        {/* Hero Image */}
        <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-[90vh]">
          <Image
            src="/HeroSection/image.png"
            alt="Nike Air Max Pulse"
            fill
            priority
            className="object-cover object-center rounded-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        
        {/* Hero Content */}
        <div className="text-center mt-8 max-w-4xl mx-auto px-4">
          <p className="text-sm text-gray-600 mb-2">First Look</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase mb-4">
            Nike Air Max Pulse
          </h2>
          <p className="text-sm md:text-base text-gray-700 mb-6 max-w-2xl mx-auto">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse —designed to push you past your limits and help you go to the max.
          </p>
          {/* Action Buttons */}
          <div className="flex justify-center space-x-4">
            <Link href="/cart">
              <button className="px-4 md:px-6 py-2 md:py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
                Notify Me
              </button>
            </Link>
            <Link href="/all-products">
              <button className="px-4 md:px-6 py-2 md:py-3 bg-black text-white font-medium rounded-full hover:bg-gray-800 transition">
                Shop Air Max
              </button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* SHOES Section */}
      <SHOES />
    </div>
  );
}
