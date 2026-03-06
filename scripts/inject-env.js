const fs = require("fs");
const path = require("path");

// Get environment variables from Netlify (or local .env if developing)
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY || "";
const RAWG_API_KEY = process.env.RAWG_API_KEY || "";

// Create environment file for production build
const envProdPath = path.join(
  __dirname,
  "../src/environments/environment.prod.ts",
);

const envContent = `export const environment = {
  production: true,
  API_URL: 'https://rawg-video-games-database.p.rapidapi.com',
  RAPIDAPI_KEY: '${RAPIDAPI_KEY}',
  RAWG_API_KEY: '${RAWG_API_KEY}',
};
`;

fs.writeFileSync(envProdPath, envContent, "utf-8");

console.log("✓ Environment configuration created for production build");
console.log(
  `  - RAPIDAPI_KEY: ${RAPIDAPI_KEY ? "***" + RAPIDAPI_KEY.slice(-4) : "⚠️  NOT SET"}`,
);
console.log(
  `  - RAWG_API_KEY: ${RAWG_API_KEY ? "***" + RAWG_API_KEY.slice(-4) : "⚠️  NOT SET"}`,
);
