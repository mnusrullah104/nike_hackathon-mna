// schemas/product.ts

const productSchema = {
  // schema details
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'originalPrice',
      title: 'Original Price',
      type: 'number',
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'number',
    },
    {
      name: 'reviews',
      title: 'Reviews',
      type: 'number',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'sizes',
      title: 'Sizes',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'stock_quantity',
      title: 'Stock Quantity',
      type: 'number',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    
  ],
};
export default productSchema;

































// export const productSchema = {
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     {
//       name: 'productName',
//       title: 'Product Name',
//       type: 'string',
//       validation: (Rule: RuleType) => Rule.required()
//     },
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
      
//       options: {
//         source: 'productName',
//       },
//       validation: (Rule: RuleType) => Rule.required()
//     },
//     {
//       name: 'category',
//       title: 'Category',
//       type: 'string',
//       validation: (Rule: RuleType) => Rule.required()
//     },
//     {
//       name: 'price',
//       title: 'Price',
//       type: 'number',
//       validation: (Rule: RuleType) => Rule.required()
//     },
//     {
//       name: 'inventory',
//       title: 'Inventory',
//       type: 'number',
//       validation: (Rule: RuleType) => Rule.required()
//     },
//     {
//       name: 'colors',
//       title: 'Colors',
//       type: 'array',
//       of: [{ type: 'string' }],
//     },
    
//     {
//       name: 'status',
//       title: 'Status',
//       type: 'string',
//       validation: (Rule: RuleType) => Rule.required()
//     },
//     {
//       name: 'image',
//       title: 'Image',
//       type: 'image', // Using Sanity's image type for image field
//       options: {
//         hotspot: true,
//       },
//       validation: (Rule: RuleType) => Rule.required()
//     },
//     {
//       name: 'description',
//       title: 'Description',
//       type: 'text',
//       validation: (Rule: RuleType) => Rule.required()
//     },
//   ],
// }