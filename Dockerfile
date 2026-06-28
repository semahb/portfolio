# ---- Build Angular ----
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Build Server ----
FROM node:20-alpine AS server-build
WORKDIR /app

COPY server/package*.json ./server/
RUN npm ci --prefix server

# ---- Run ----
FROM node:20-alpine
WORKDIR /app

COPY --from=build /app/dist ./dist
COPY --from=server-build /app/server/node_modules ./server/node_modules
COPY server/index.js ./server/

EXPOSE 2000

CMD ["node", "server/index.js"]
