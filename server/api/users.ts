import {useDB} from '~/server/drizzle/db';

const db = useDB()

export default defineEventHandler(async (event) => {
  return db.query.users.findMany()
})
