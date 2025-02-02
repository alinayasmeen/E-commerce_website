import { defineType } from "sanity";

export const orderSchema = defineType({
    name: "order",
    title: "Order",
    type: "document",
    fields: [
        {
            name: "user",
            title: "User",
            type: "reference",
            to: [{ type: "user" }],
            validation: Rule => Rule.required()
        },
        {
            name: "products",
            title: "Products",
            type: "array",
            of: [{ type: "reference", to: [{ type: "products" }] }],
            validation: Rule => Rule.required()
        },
        {
            name: "total",
            title: "Total",
            type: "number",
            validation: Rule => Rule.required()
        },
        {
            name: "status",
            title: "Status",
            type: "string",
            options: {
                list: [
                    { title: "Pending", value: "pending" },
                    { title: "Processing", value: "processing" },
                    { title: "Delivered", value: "delivered" },
                    { title: "Cancelled", value: "cancelled" }
                ]
            },
            validation: Rule => Rule.required()
        },
        {
            name: "created_at",
            title: "Created At",
            type: "datetime",
            validation: Rule => Rule.required()
        }
    ]
})