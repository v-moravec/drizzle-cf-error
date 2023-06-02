# Nuxt Drizzle CF Example

## Setup 🛠

Make sure to install the dependencies:

```bash
yarn install
```

Add your environment variables to `.env`

## CF Error

```bash
service core:user:worker: Uncaught TypeError: Pool is not a constructor
  at 4s3or5e5pl8.js:15018:16 in useDB
  at 4s3or5e5pl8.js:15022:8
✘ [ERROR] MiniflareCoreError [ERR_RUNTIME_FAILURE]: The Workers runtime failed to start. There is likely additional logging output above.
```

To see Pool connection error run:

```bash
yarn build
```

And then:

```bash
npx wrangler pages dev dist/
```

## Development Server 👨🏻‍💻

Start the development server on http://localhost:3000

```bash
yarn dev
```
