import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const users = pgTable('users', {
    id: serial('id').primaryKey(),
    firstName: varchar('first_name', { length: 50 }),
    lastName: varchar('last_name', { length: 50 }),
    emailId: varchar('email_id', { length: 50 }),
    password: varchar('password', { length: 100 }),
})