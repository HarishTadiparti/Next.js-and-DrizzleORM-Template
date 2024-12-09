import drizzleConfig from "@/drizzle.config";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

async function main() {
    const connection = postgres(process.env.DB_URL as string, { max: 1 })
    await migrate(drizzle(connection), { migrationsFolder: drizzleConfig.out as string })

    await connection.end()
}

main()