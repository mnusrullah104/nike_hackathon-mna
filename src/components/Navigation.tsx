import Link from "next/link";

export default function Navigation() {
  const sections = [
    {
      title: "Icons",
      items: ["Air Force 1", "Huarache", "Air Max 90", "Air Max 95"],
    },
    {
      title: "Shoes",
      items: ["All Shoes", "Custom Shoes", "Jordan Shoes", "Running Shoes"],
    },
    {
      title: "Clothing",
      items: ["All Clothing", "Modest Wear", "Hoodies & Pullovers", "Shirts & Tops"],
    },
    {
      title: "Kid's",
      items: ["Infant & Toddler Shoes", "Kids Shoes", "Kids Jordan Shoes", "Kids Basketball Shoes"],
    },
  ];

  return (
    <nav className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index}>
              <span className="text-lg font-semibold text-gray-900 mb-4 block">
                {section.title}
              </span>
              <ul className="space-y-4 text-base text-gray-500">
                {section.items.map((item, idx) => (
                  <li key={idx}>
                    <Link
                      href="#"
                      className="block hover:text-gray-900 transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}