import {useDB} from '~/server/drizzle/db'

const db = useDB()

export default defineEventHandler(async (event) => {
  const { id } = getQuery(event)

  if(!id) return {message: 'Invalid ID'}

  return db.query.users.findFirst({
    where: (users, {eq}) => eq(users.id, +id),
  })
})
