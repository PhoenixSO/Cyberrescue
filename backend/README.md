# Cyberrescue Backend Deployment

## Local Run

1. Copy `.env.example` to `.env`.
2. Install dependencies:
   - `npm ci`
3. Start server:
   - `npm start`
4. Test health endpoint:
   - `http://localhost:5000/api/health`

## Production Deployment (Render)

1. Create a new Render Blueprint deployment from this repository.
2. Render will read `render.yaml` and deploy `backend/` as a web service.
3. Set `ALLOWED_ORIGINS` to your frontend domain (for example `https://cyberrescue.space`).
4. After deploy, note your backend URL (for example `https://cyberrescue-backend.onrender.com`).

## Frontend Connection

1. In GitHub repository settings, add Actions variable:
   - `VITE_API_BASE_URL=https://<your-backend-domain>`
2. Push any commit to `main` to trigger frontend rebuild.
3. Verify in browser:
   - `https://cyberrescue.space/api/health` is expected to fail on Pages.
   - App API calls should go to your configured backend domain.
