const config = {
  DB_USER: process.env.POSTGRESDB_USER,
  DB_PASSWORD: process.env.POSTGRESDB_ROOT_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.POSTGRESDB_DATABASE,
  W_URL: process.env.W_URL,
  W_PUB_TEST: process.env.W_PUB_TEST,
  W_PRIV_TEST: process.env.W_PRIV_TEST,
  PORT: 5432,
  CONNECTION_TIMEOUT: 30000,
}

export default config
