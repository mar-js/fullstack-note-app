import { createPool } from 'mysql2/promise'

const POOL = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB,
  port: Number(process.env.DB_PORT)
})

export const query = async (query: string, values?: string[]) => {
  try {
    const [ result ] = await POOL.query(query, values)

    return result
  } catch (error) {
    return error
  }
}
