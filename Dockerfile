# 1. Use a lightweight Node.js image (LTS version for 2026)
FROM node:20-alpine

# 2. Create the folder where our app will live inside the container
WORKDIR /app

# 3. Copy package files first to optimize Docker's caching
# This makes subsequent builds much faster
COPY package*.json ./

# 4. Install the necessary database and web framework drivers
# 'pg' is for Postgres, 'express' is for the server
RUN npm install express pg

# 5. Copy the rest of your files (app.js, index.html, etc.)
COPY . .

# 6. Tell Docker that the app listens on port 3000
EXPOSE 3000

# 7. The command to start your application
CMD ["node", "app.js"]
