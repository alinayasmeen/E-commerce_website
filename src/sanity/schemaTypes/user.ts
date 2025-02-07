
import { defineType } from "sanity";

export const userSchema = defineType({
    name: "user",
    title: "User",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
            validation: Rule => Rule.required().min(1).max(50)
        },
        {
            name: "email",
            title: "Email",
            type: "string",
            validation: Rule => Rule.required().email()
        },
        {
            name: "password",
            title: "Password",
            type: "string",
            validation: Rule => Rule.required().min(8).max(50)
        },
        {
            name: "phone_no",
            title: "Phone no",
            type: "string",
            validation: Rule => Rule.required().regex(/^\d{10}$/, {
                name: 'phone number', // Error message is "Must be a valid phone number"
                invert: false, // Boolean to allow any value that doesn't match the regex
            })
        }
    ]
});
  