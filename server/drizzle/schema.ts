import {pgTable, serial, varchar, timestamp} from 'drizzle-orm/pg-core'
import {InferModel} from 'drizzle-orm'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
  email: varchar('email', { length: 256 }),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow()
})

export type User = InferModel<typeof users>
export type NewUser = InferModel<typeof users, 'insert'>
