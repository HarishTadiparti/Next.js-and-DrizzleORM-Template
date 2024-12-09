import { defineConfig } from "drizzle-kit";

export default defineConfig({
    dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
    schema: './src/db/schema/*',
    out: './drizzle',
    dbCredentials: {
        url: process.env.DB_URL as string
    },
    verbose: true,
    strict: true
})

