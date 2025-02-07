import Image from "next/image";

export default function EssentialsSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="font-semibold text-xl mb-8 text-center md:text-left">
        The Essentials
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        <Image
          width={300}
          height={300}
          alt="Essential 1"
          src="/HeroSection/image10.png"
          className="object-contain"
        />
        <Image
          width={300}
          height={300}
          alt="Essential 2"
          src="/HeroSection/image11.png"
          className="object-contain"
        />
        <Image
          width={300}
          height={300}
          alt="Essential 3"
          src="/HeroSection/image12.png"
          className="object-contain"
        />
      </div>
    </section>
  );
}