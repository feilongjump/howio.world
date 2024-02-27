### 安装依赖
FROM node:slim as base

RUN corepack enable
WORKDIR /app

ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"

COPY package.json pnpm-lock.yaml /app/
RUN --mount=type=cache,id=pnpm,target=/pnpm/store pnpm install

### 构建
FROM base as build

WORKDIR /app

COPY --from=base /app/node_modules ./node_modules
COPY . .

RUN pnpm build

### 运行
FROM nginx:stable-alpine-slim as deploy

COPY --from=build /app/dist/ /var/www/howio.world

COPY ./howio.world.conf /etc/nginx/conf.d/howio.world.conf

EXPOSE 80 443
