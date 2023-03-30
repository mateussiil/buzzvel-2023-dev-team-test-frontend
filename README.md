You need first run the backend, and you can find in [Backend](https://github.com/mateussiil/buzzvel-2023-dev-team-test-backend)

## Getting Started

Clone Repository
```sh
git clone [https://github.com/mateussiil/buzz-2023-dev-team-test-frontend.git](https://github.com/mateussiil/buzzvel-2023-dev-team-test-frontend) app-frontend
```

```sh
cd app-frontend/
```

Create the .env file
```sh
cp .env.example .env
```

Update .env file environment variables
```
NEXT_PUBLIC_BACKEND_URL=http://localhost:8989
```

Install the dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## pages

- [/](http://localhost:3000): a simple interface only 
- [/generate](http://localhost:3000/generate): where generates the QR code
- [/name](http://localhost:3000/name): where get info about the user


if you want run the project in containers
```sh
docker build -t buzz-frontend .
```
