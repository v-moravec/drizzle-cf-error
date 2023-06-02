import type { Config } from 'drizzle-kit'

export default {
  out: 'server/drizzle/migrations',
  schema: 'server/drizzle/schema.ts'
} satisfies Config
