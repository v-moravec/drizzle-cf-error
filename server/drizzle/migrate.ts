import { config } from 'dotenv'
import { migrate } from 'drizzle-orm/postgres-js/migrator'
import postgres from 'postgres'

import { drizzle } from 'drizzle-orm/postgres-js'

config({ path: '.env' })

const url = `${process.env.NUXT_DB_URL}?options=project%3D${process.env.PROJECT_NAME}`
const db = drizzle(postgres(url, { ssl: 'require', max: 1 }))
const main = async () => {
  await migrate(db, { migrationsFolder: 'server/drizzle/migrations' })
  process.exit(0)
}
main()
