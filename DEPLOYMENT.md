# Deployment

This project is a Next.js app and supports deployment on Vercel, Render, and Railway.

## Render

1. In Render, create a new **Blueprint** and connect this repository.
2. Render will detect `render.yaml` and create a web service automatically.
3. Default commands from config:
   - Build: `npm ci && npm run build`
   - Start: `npm run start:render`

## Railway

1. In Railway, create a new project from this repository.
2. Railway will use `railway.json` with Dockerfile build:
   - Build: `Dockerfile`
   - Start: `npm run start:railway`

## Runtime Notes

- App binds to `0.0.0.0` and reads `PORT` from platform env.
- If `PORT` is not set, it falls back to `3000`.
- Set your own project env vars in Render/Railway dashboards if needed.
