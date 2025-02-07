import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "@/components/Footer";
import Nav from "@/components/Header2";
import Script from "next/script";
import { ClerkProvider } from "@clerk/nextjs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Nike E-Commerce",
  description: "Generated by Muhammad Nasrullah",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ClerkProvider>
     
        <Nav/>
        {children}
        <Footer />
     
        </ClerkProvider>
      </body>
      <Script id="custom-inline-script">
  {`console.log("Inline script running")`}
</Script>
      {/* <Script>
        {`
           window.SnipcartSettings = {
            publicApiKey: "N2U2Y2VmMDktNzJjNS00NmQ5LTgxZDktNTE2OGM4MTRhM2Q4NjM4NzE2NDk0NjE2NTA2MDk0",
          loadStrategy: "on-user-interaction",
          };

                 (function(){var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");var m,g;(g=(m=window.SnipcartSettings).loadCSS)!=null||(m.loadCSS=!0);var y=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1,f=["focus","mouseover","touchmove","scroll","keydown"];window.LoadSnipcart=o;document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();function r(){window.SnipcartSettings.loadStrategy?window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(f.forEach(function(t){return document.addEventListener(t,o)}),setTimeout(o,window.SnipcartSettings.timeoutDuration)):o()}var a=!1;function o(){if(a)return;a=!0;let t=document.getElementsByTagName("head")[0],n=document.querySelector("#snipcart"),i=document.querySelector('src[src^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][src$="snipcart.js"]')),e=document.querySelector('link[href^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][href$="snipcart.css"]'));n||(n=document.createElement("div"),n.id="snipcart",n.setAttribute("hidden","true"),document.body.appendChild(n)),h(n),i||(i=document.createElement("script"),i.src="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.js"),i.async=!0,t.appendChild(i)),!e&&window.SnipcartSettings.loadCSS&&(e=document.createElement("link"),e.rel="stylesheet",e.type="text/css",e.href="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.css"),t.prepend(e)),f.forEach(function(v){return document.removeEventListener(v,o)})}function h(t){!y||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))}})();
                    `}
      </Script> */}
    </html>
  );
}











// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";
// import Script from "next/script";
// import Footer from "@/components/Footer";
// import Nav from "@/components/Header2";
// import { ClerkProvider } from "@clerk/nextjs";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });

// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title: "Nike E-Commerce",
//   description: "Generated by Muhammad Nasrullah",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//     <html lang="en">
//       <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//         {/* Navigation Bar */}
//         <Nav />

//         {/* Main Content */}
//         {children}

//         {/* Footer */}
//         <Footer />

//         {/* Snipcart Integration */}
//         <Script>
//           {`
//            window.SnipcartSettings = {
//             publicApiKey: "N2U2Y2VmMDktNzJjNS00NmQ5LTgxZDktNTE2OGM4MTRhM2Q4NjM4NzE2NDk0NjE2NTA2MDk0",
//             loadStrategy: "on-user-interaction",
//           };

//           (function(){
//             var c,d;(d=(c=window.SnipcartSettings).version)!=null||(c.version="3.0");
//             var s,S;(S=(s=window.SnipcartSettings).timeoutDuration)!=null||(s.timeoutDuration=2750);
//             var l,p;(p=(l=window.SnipcartSettings).domain)!=null||(l.domain="cdn.snipcart.com");
//             var w,u;(u=(w=window.SnipcartSettings).protocol)!=null||(w.protocol="https");
//             var m,g;(g=(m=window.SnipcartSettings).loadCSS)!=null||(m.loadCSS=!0);
//             var y=window.SnipcartSettings.version.includes("v3.0.0-ci")||window.SnipcartSettings.version!="3.0"&&window.SnipcartSettings.version.localeCompare("3.4.0",void 0,{numeric:!0,sensitivity:"base"})===-1;
//             var f=["focus","mouseover","touchmove","scroll","keydown"];
//             window.LoadSnipcart=o;
//             document.readyState==="loading"?document.addEventListener("DOMContentLoaded",r):r();
//             function r(){
//               window.SnipcartSettings.loadStrategy?
//                 window.SnipcartSettings.loadStrategy==="on-user-interaction"&&(
//                   f.forEach(function(t){return document.addEventListener(t,o)}),
//                   setTimeout(o,window.SnipcartSettings.timeoutDuration))
//                 :o()
//             }
//             var a=!1;
//             function o(){
//               if(a)return;
//               a=!0;
//               let t=document.getElementsByTagName("head")[0],
//                   n=document.querySelector("#snipcart"),
//                   i=document.querySelector('src[src^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][src$="snipcart.js"]')),
//                   e=document.querySelector('link[href^="'.concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,'"][href$="snipcart.css"]'));
//               n||(n=document.createElement("div"),n.id="snipcart",n.setAttribute("hidden","true"),document.body.appendChild(n));
//               h(n);
//               i||(i=document.createElement("script"),i.src="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.js"),i.async=!0,t.appendChild(i));
//               !e&&window.SnipcartSettings.loadCSS&&(e=document.createElement("link"),e.rel="stylesheet",e.type="text/css",e.href="".concat(window.SnipcartSettings.protocol,"://").concat(window.SnipcartSettings.domain,"/themes/v").concat(window.SnipcartSettings.version,"/default/snipcart.css"),t.prepend(e));
//               f.forEach(function(v){return document.removeEventListener(v,o)})
//             }
//             function h(t){
//               !y||(t.dataset.apiKey=window.SnipcartSettings.publicApiKey,
//               window.SnipcartSettings.addProductBehavior&&(t.dataset.configAddProductBehavior=window.SnipcartSettings.addProductBehavior),
//               window.SnipcartSettings.modalStyle&&(t.dataset.configModalStyle=window.SnipcartSettings.modalStyle),
//               window.SnipcartSettings.currency&&(t.dataset.currency=window.SnipcartSettings.currency),
//               window.SnipcartSettings.templatesUrl&&(t.dataset.templatesUrl=window.SnipcartSettings.templatesUrl))
//             }
//           })();
//           `}
//         </Script>
//       </body>
//     </html>
//     </ClerkProvider>
//   );
// }