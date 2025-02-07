import Image from "next/image";

export default function GearUpSection() {
  const gearItems = [
    {
      img: "/HeroSection/image5.png",
      title: "Nike Dri-FIT ADV TechKnit Ultra",
      price: "₹ 3,895",
    },
    {
      img: "/HeroSection/image6.png",
      title: "Nike Dri-FIT Challenger",
      price: "₹ 2,495",
    },
    {
      img: "/HeroSection/image7.png",
      title: "Nike Dri-FIT ADV Run Division",
      price: "₹ 5,295",
    },
    {
      img: "/HeroSection/image8.png",
      title: "Nike Fast",
      price: "₹ 3,795",
    },
  ];

  return (
    <section className="bg-white py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center md:text-left">
          Gear Up
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gearItems.map((item, index) => (
            <div key={index} className="text-center flex flex-col items-center">
              <Image
                src={item.img}
                alt={item.title}
                width={300}
                height={300}
                className="rounded-lg object-contain"
              />
              <p className="text-gray-700 font-medium mt-4">{item.title}</p>
              <p className="text-gray-500 text-sm">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}