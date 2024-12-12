import { z } from "zod";

export const UserSchema = z.object({
    firstName: z.string({ required_error: 'First Name is required' }).min(2, { message: "First Name must be at least 2 characters" }),
    lastName: z.string({ required_error: 'Last Name is required' }).min(2, { message: "Last Name must be at least 2 characters" }),
    email: z.string({ required_error: 'Email is required' }).email({ message: 'Email is invalid' })
})

export const UserDefaultValues = {
    firstName: '',
    lastName: '',
    email: ''
}