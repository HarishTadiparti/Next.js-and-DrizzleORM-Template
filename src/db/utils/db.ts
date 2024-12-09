import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { schema } from '@/src/db/schema/schema'

export const db = drizzle(postgres(process.env.DB_URL as string), { schema })