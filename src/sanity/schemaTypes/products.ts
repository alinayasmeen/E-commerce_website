 import { Rule } from "sanity";

// export const Product = {
//   name: "product",
//   title: "Product",
//   type: "document",
//   fields: [
//     {
//       name: "title",
//       title: "Title",
//       type: "string",
//       validation: (Rule: Rule) => Rule.required(),
//     },
//    

//     },
//     {
//       name: "price",
//       title: "Price",
//       type: "number",
//       options: {
//         currency: "USD",
//       },
//       validation: (Rule: Rule) => Rule.required().min(0),
//     },
//     {
//       name: "image",
//       title: "Image",
//       type: "image",
//     },
//     {
//       name: "description",
//       title: "Description",
//       type: "text",
//     },
//     {
//       name: "quantity",
//       title: "Quantity",
//       type: "number",
//       validation: (Rule: Rule) => Rule.required().min(0),
//     },
//     {
//       name: "categories",
//       title: "Categories",
//       type: "array",
//       of: [{ type: "string" }],
//       validation: (Rule: Rule) =>
//         Rule.required()
//           .min(1)
//           .max(5)
//           .error("Please select between 1 and 5 categories."),
//       options: {
//         layout: "checkbox",
//         list: [
//           { title: "Chairs", value: "chairs" },
//           { title: "Sofa", value: "sofa" },
//           { title: "Armchair", value: "armchair" },
//           { title: "Park Bench", value: "park_bench" },
//           { title: "Wooden Chair", value: "wooden_chair" },
//           { title: "Desk Chair", value: "desk_chair" },
//           { title: "Wing Chair", value: "wing_chair" },
//         ],
//       },
//     },
//   ],
// };

import { defineType } from "sanity";

export const productSchema = defineType({
  name: "products",
  title: "Products",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Product Title",
      type: "string",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "_id",
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      options: {
        currency: "USD",
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      title: "Price without Discount",
      name: "priceWithoutDiscount",
      type: "number",
    },
    {
      name: "badge",
      title: "Badge",
      type: "string",
    },
    {
      name: "image",
      title: "Product Image",
      type: "image",
     validation: (Rule: Rule) => Rule.required(),

    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "categories" }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "description",
      title: "Product Description",
      type: "text",
    },
    {
      name: "inventory",
      title: "Inventory Management",
      type: "number",
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "Featured", value: "featured" },
          {
            title: "Follow products and discounts on Instagram",
            value: "instagram",
          },
          { title: "Gallery", value: "gallery" },
        ],
      },
    },
  ],
});