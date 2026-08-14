# -------------------------
# Build stage
# -------------------------
FROM node:24-alpine AS build

WORKDIR /app

# 依存関係を先にコピー
COPY package*.json ./
# 依存関係のインストールコマンド
RUN npm ci
# Reactソースをコピー
COPY . .

# Viteによる本番ビルド
RUN npm run build


# -------------------------
# Runtime stage
# -------------------------
FROM nginx:stable-alpine

# nginx設定
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Viteのbuild成果物をnginxへ配置
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]