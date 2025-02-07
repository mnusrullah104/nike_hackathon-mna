import { groq } from "next-sanity"

export const allproducts=groq `*[_type=="product"]`;
export const four = groq `*[_type=="product"][0...4]`; 
export const eight = groq `*[_type=="product"][0...8]`; 

