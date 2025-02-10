import { groq } from "next-sanity"

export const allproducts=groq `*[_type=="product"]`;
export const sixProductsQuery = groq`*[_type == "product"][0..5]`;

export const kidsProductsQuery = groq`*[_type == "product" && "kids" in tags]`;

// export const womenProductsQuery = groq`*[_type == "product" && "women" in tags]`;
export const menProductsQuery = groq`*[_type == "product" && "men" in tags]`;
export const jordanProductsQuery = groq`*[_type == "product" && "jordan" in tags]`;