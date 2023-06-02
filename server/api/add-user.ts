import {users} from '../drizzle/schema'
import {useDB} from '~/server/drizzle/db';

const db = useDB()

export default defineEventHandler(async (event) => {
  return db.insert(users).values({
    name: 'Jesse Pinkman',
    email: 'jesse.pinkman@google.com'
  })
})
