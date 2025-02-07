export const projectData = [
    {
      id: 1,
      title: "Nike Air Max Pulse",
      description: "Mens's Shoes",
      image: "/font.svg" ,
      price:"PKR 13 995",
    },
    {
      id: 2,
      title: "Nike Air Max 101 FE",
      description: "Mens's Shoes",
      image: "/shoes1.svg",
      price:"PKR 16 895",

    },
    {
      id: 3,
      title: "Nike Air Max 97 SE",
      description: "Mens's Shoes",
      image: "/blue.svg",
      price:"PKR 11 595",

    },



     {
      id: 4,
      title: "Nike Dri-FIT ADV ",
      description: "Men's Short-Sleeve Running Top ",
      image: "/men3.svg",
      price:"PKR 3 895"
    },
    
    {
      id: 5,
     title: "Nike Fast",
      description: "Women's Mid-Rise 7/8 Running Leggings with Pockets ",
      image: "/error5.svg",
      price:"PKR 3 795"
    },


    {
      id: 6,
       title: "Nike Dri-FIT ADV Division",
      description: "Women's Long-Sleeve Running Top",
      image: "/error7.svg",
      price:"PKR 5 295"
    },
    {
      id: 7,
      title: "Nike Dri-FIT Challenger",
      description: "Men's 18cm (approx.) 2-in-1 Versatile Shorts",
      image: "/error6.svg",
      price:"PKR 2 495"
    },
   
// Women

    {
      id: 8,
      check:"Just In",
      title: "Women's Mid-Rise 18cm Biker Shorts",
      description: "Women's Mid-Rise 18cm Biker Shorts",
      image: "/women1.svg",
      color: "2 Colors",
      price:"PKR 3 895"
    },
    {
      id: 9,
      check:"Just In",
      title: "Nike Dri-FIT Ready",
      description: "Men's Short-Sleeve Fitness Top",
      image: "/men1.svg",
      color: "1 Colors",
      price:"PKR 2 495.00"
    },
    {
      id: 10,
      check:"Just In",
      title: "Nike Outdoor Play",
      description: "Older Kids' Oversized Woven Jacket",
      image: "/kid1.svg",
      color: "2 Colors",
      price:"PKR 3 895.00"
    },
    {
      id: 11,
      check:"Just In",
      title: "Serena Williams Design Crew",
      description: "Women's Full-zip Top",
      image: "/women2.svg",
      color: "3 Colors",
      price:"₹ 3 895"
    },
    {
      id: 12,
      check:"Just In",
      title: "NikeCourt Victory",
      description: "Women's Tennis Tank",
      image: "/women3.svg",
      color: "1 Colors",
      price:"PKR 1 995.00"
    },
    {
      id: 13,
      check:"Just In",
      title: "Nike Sportswear",
      description: "Older Kids' (Girls') T-Shirt",
      image: "/kid2.svg",
      color: "1 Colors",
      price:"PKR 1 295.00"
    },
    {
      id: 14,
      check:"Just In",
      title: "Nike Dri-FIT Academy",
      description: "Older Kids' Woven Football Tracksuit Bottoms",
      image: "/men2.png",
      color: "2 Colors",
      price:"PKR 2 195.00"
    },
    {
      id: 15,
      check:"Just In",
      title: "Nike Sportswear",
      description: "Women's High-Waisted Ribbed Jersey Trousers",
      image: "/short1.svg",
      color: "1 Colors",
      price:"PKR 3 995.00"
    },
    {
      id: 16,
      check:"Sustainable Materials",
      title: "Nike Go",
      description: "Women's Firm-Support High-Waisted Leggings",
      image: "/women5.svg",
      color: "1 Colors",
      price:"PKR 5 795.00"
    },
  ]


//   <div className="w-[90%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-7">
//   {projectData.map((item) => {
//     return (
//       <div
//         key={item.id}
//         className="pb-4 m-1 shadow-custom-violet rounded-lg md:transition-all duration-300 md:hover:scale-105">
//         <Image
//           src={item.image}
//           alt={item.title}
//           width={2000}
//           height={2000}
//           className="w-full  rounded-t-md  border-b-[2px] border-gray-400  cursor-pointer "
//         />
//         <div className="px-3 pt-3">
//           <h1 className="font-bold text-[20px]">{item.title}</h1>
//           <p className="text-[14px] font-semibold pt-3">
//             {item.description}
//           </p>
//         </div>
//         <div className="px-3 pt-3 flex justify-left items-center gap-x-5 ">
//           <Link
//             className="text-[#1e3758] font-semibold "
//             href={item.live}
//             target="_blank"
//           >
//             Live Demo
//           </Link>
//           <Link
//             className="text-[#1e3758] font-semibold "
//             href={item.github}
//             target="_blank"
//           >
//             Github
//           </Link>
//         </div>
//       </div>
//     );
//   })}
// </div>