# Stage 1: Build the application
FROM node:slim AS builder

WORKDIR /app

# Copy package files first to leverage Docker cache
COPY package*.json ./
COPY tsconfig*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY src ./src

# Build TypeScript to JavaScript
RUN npm run build

# Stage 2: Production image
FROM node:slim

WORKDIR /app

# Set environment variables
ENV NODE_ENV=production

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy built files from builder
COPY --from=builder /app/dist ./dist

COPY drizzle ./drizzle

# Expose the port the app runs on
EXPOSE 6001

# Command to run the application
CMD ["node", "dist/index.js"]