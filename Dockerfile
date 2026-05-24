# Build the portfolio static site from the npm workspaces monorepo.
FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies (workspace package.json files are required for npm ci).
COPY package.json package-lock.json .npmrc ./
COPY artifacts/portfolio/package.json artifacts/portfolio/
COPY artifacts/api-server/package.json artifacts/api-server/
COPY artifacts/mockup-sandbox/package.json artifacts/mockup-sandbox/
COPY lib/api-client-react/package.json lib/api-client-react/
COPY lib/api-zod/package.json lib/api-zod/
COPY lib/api-spec/package.json lib/api-spec/
COPY lib/db/package.json lib/db/
COPY scripts/package.json scripts/

RUN npm ci --ignore-scripts

# Copy only the source needed to build the portfolio.
COPY tsconfig.base.json ./
COPY lib/api-client-react lib/api-client-react
COPY artifacts/portfolio artifacts/portfolio

ARG BASE_PATH=/
ENV BASE_PATH=${BASE_PATH}

RUN npm run build --workspace=@workspace/portfolio

# Serve the built site with nginx (Railway injects PORT at runtime).
FROM nginx:1.27-alpine AS runner

RUN apk add --no-cache gettext wget

COPY docker/nginx.conf.template /etc/nginx/templates/default.conf.template
COPY docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

COPY --from=build /app/artifacts/portfolio/dist /usr/share/nginx/html

ENV PORT=8080

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD /bin/sh -c 'wget -qO- "http://127.0.0.1:$${PORT:-8080}/" > /dev/null || exit 1'

ENTRYPOINT ["/entrypoint.sh"]
