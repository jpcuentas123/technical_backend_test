import config from '@config/config'
import { Pool, PoolConfig } from 'pg'

const dbConfig: PoolConfig = {
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  host: config.DB_HOST,
  database: config.DB_NAME,
  port: config.PORT,
  connectionTimeoutMillis: config.CONNECTION_TIMEOUT,
}

const pool = new Pool(dbConfig)

const query = async (statement: any): Promise<any> => {
  const client = await pool.connect()

  const { rows } = await client.query(statement)
  client.release()

  return rows
}

export interface DB {
  create: (statement: any) => Promise<any>
  update: (statement: any) => Promise<any>
  remove: (statement: any) => Promise<any>
  list: (statement: any) => Promise<any[]>
}

export const psqlDB: DB = {
  create: query,
  update: query,
  remove: query,
  list: query,
}