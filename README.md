# Tumelo Mphahlele Portfolio

A React/Vite portfolio served by a small Express API.

## Local development

```sh
npm run install:all
npm run dev
```

The frontend runs through Vite and the API is available on port 3001.

## Render deployment

The repository includes a Render Blueprint in `render.yaml`. The service builds the React frontend, starts Express as the production web server, and serves both the API and built frontend on the same origin.

1. Push the repository to GitHub.
2. In Render, choose **New > Blueprint** and select the repository.
3. Confirm the `tumelo-portfolio` web service.
4. Deploy and verify `/api/health`.

Production build and start commands:

```sh
npm install --prefix backend
npm install --prefix frontend
npm run build --prefix frontend
npm start --prefix backend
```
