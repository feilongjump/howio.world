FROM node:alpine as builder

COPY . /app/

WORKDIR /app

RUN npm config set registry https://registry.npmmirror.com
RUN npm install -g pnpm

RUN pnpm install
RUN pnpm build

######## 仅运行 ########
FROM node:slim

COPY --from=builder /app/.output /app/.output
COPY .env /app

WORKDIR /app

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
