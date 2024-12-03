FROM node:22-alpine

# Установка pnpm
RUN npm install -g pnpm

WORKDIR /app

# Установка зависимостей
COPY pnpm-lock.yaml ./
RUN pnpm fetch

COPY . .
RUN pnpm install -r --offline

EXPOSE 6006

CMD ["pnpm", "run", "storybook", "--no-open"]
