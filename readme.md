# Krom Test Backend

Irsyad Abdul Hamid Darussalam

## Tech Stack

- Express Typescript
- MySQL

## Installation

1. install dependencies

   ```bash
   npm ci
   ```

2. copy `.env.example` to `.env`
3. set configuration (node env, database url, port)
4. create database named `krom-test` (or other based on `.env` file)

   ```sql
   CREATE DATABASE `krom-test`;
   ```

5. running migration and seeder

   ```bash
   npm run migrate && npm run seed
   ```

6. run the application

   ```bash
   npm run build && npm run start-production
   ```

## Installation with Docker

1. run docker compose

   ```bash
   docker compose up -d
   ```
