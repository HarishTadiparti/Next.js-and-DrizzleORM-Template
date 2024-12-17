import { users } from "@/src/db/schema/user"
import { db } from "@/src/db/utils/db"

export async function GET() {
    const allUsers = await db.select().from(users)
    return Response.json({ users: allUsers })
}