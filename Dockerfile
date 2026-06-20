# ---- Build stage ----
FROM node:20-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# ---- Serve stage ----
FROM nginx:alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Angular 17+ (esbuild builder) outputs to dist/<project-name>/browser
# If your Angular project name isn't "portfolio", change the path below to match.
COPY --from=build /app/dist/portfolio /usr/share/nginx/html

EXPOSE 2000
