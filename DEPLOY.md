# Deploying to Render

You need to deploy TWO services on Render:

## Step 1: Deploy Backend (Web Service)

1. Go to Render Dashboard → New → **Web Service**
2. Connect your GitHub repo
3. Settings:
   - **Name**: `barbershop-api` (or any name you want)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
   - **Root Directory**: Leave empty (or `./` if needed)
4. Click "Create Web Service"
5. Wait for it to deploy
6. Copy the URL (e.g., `https://barbershop-api.onrender.com`)

## Step 2: Deploy Frontend (Static Site)

1. Go to Render Dashboard → New → **Static Site**
2. Connect your GitHub repo
3. Settings:
   - **Name**: `barbershop` (or any name)
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
   - **Root Directory**: Leave empty
4. **Environment Variables**:
   - Click "Add Environment Variable"
   - **Key**: `VITE_API_URL`
   - **Value**: `https://barbershop-api.onrender.com/api` (use your backend URL from Step 1)
5. Click "Create Static Site"
6. Wait for it to deploy

## Important Notes

- The backend URL will be something like `https://your-backend-name.onrender.com`
- Make sure to use `https://` not `http://`
- Add `/api` at the end of the backend URL in the environment variable
- Both services need to be deployed for the app to work

## Testing

After both are deployed:
1. Visit your frontend URL
2. Try booking an appointment
3. Check if it connects to the backend

