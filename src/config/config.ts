const config = {
  DB_URL: process.env.DATABASE_URL,
  DB_USER: process.env.POSTGRESDB_USER,
  DB_PASSWORD: process.env.POSTGRESDB_ROOT_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.POSTGRESDB_DATABASE,
  W_URL: process.env.W_URL,
  W_PUB_TEST: process.env.W_PUB_TEST,
  W_PRIV_TEST: process.env.W_PRIV_TEST,
  PORT: 5432,
  CONNECTION_TIMEOUT: 30000,
  USER_ID: '74b9b862-cbbc-419c-9db2-3355056f737f',
  API: {
    URL: 'http://localhost:6868',
  },
}

export default config
