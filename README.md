A technical test.

# Contents

- [Global Requisites](#global-requisites)
- [Install, Configure &amp; Run](#install-configure--run)
- [List of Routes](#list-of-routes)

# Global Requisites

- node (>= 16)
- typescript (>= ^5.0.3)

# Install, Configure & Run

```bash
# Without Docker

# Install NPM dependencies.
npm install;

# Edit your env file.
vim .env;

# Run the app
npm run dev;
```

```bash
# With Docker

# Run the app in docker as a foreground process
docker-compose up

# Run the app in docker as a background process
docker-compose up -d
```

# Tests

```
# Run tests
npm run test
```

# List of Routes

Full documentation [here](https://app.swaggerhub.com/apis-docs/JPCUENTAS123/technical_test/1.0.0) 

```sh
# API Routes:
+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET    | /api/v1/
  GET    | /api/v1/acceptance_token
  POST   | /api/v1/payment_source
  POST   | /api/v1/riders
  POST   | /api/v1/driver
+--------+-------------------------+
```
