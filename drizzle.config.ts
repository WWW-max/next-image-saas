import { defineConfig } from "drizzle-kit";
export default defineConfig({
    schema: "./src/db/schema.ts",
    driver: "d1-http",
    dbCredentials: {
        host: "localhost",
        port: 5432,
        user: "postgres",
        password: "123123",
        database: "next-image-saas",
        verbose: true,
        strict: true
        }
});