// import { defineField, defineType } from 'sanity';

// export const categories = defineType({
//     name: 'categories',
//     title: 'Categories',
//     type: 'document',
//     fields: [
//         defineField({
//             name: 'name',
//             type: 'string',
//             title: 'Category Name'
//         }),
//         defineField({
//             name: 'slug',
//             type: 'slug',
//             title: 'Slug',
//             options: {
//                 source: 'name'
//             }
//         }),
//     ]
// });

import { defineType } from "sanity";

export const categorySchema = defineType({
    name: 'categories',
    title: 'Categories',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Category Title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Category Image',
            type: 'image',
        },
        {
            title: 'Number of Products',
            name: 'products',
            type: 'number',
        }
    ],
});