import {neonConfig, Pool} from '@neondatabase/serverless'
import {drizzle, NeonDatabase} from 'drizzle-orm/neon-serverless'
import * as schema from '~/server/drizzle/schema'

// if we're running locally
if (process.env.LOCAL) {
  console.log('Redo websocket')
  import('ws').then(ws => {
    neonConfig.webSocketConstructor = ws.WebSocket
  })
}

const config = useRuntimeConfig()

if (!config.dbUrl) {
  throw new Error('NUXT_DB_URL is not set')
}

let db: NeonDatabase<typeof schema> | undefined = undefined

export const useDB = () => {
  if (db) {
    return db
  }
  const pool = new Pool({ connectionString: config.dbUrl })
  db = drizzle(pool, { schema })
  return db
}

db = useDB()
