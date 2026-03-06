const fs = require("fs");
const path = require("path");

// Get environment variables
const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY || "";
const RAWG_API_KEY = process.env.RAWG_API_KEY || "";

// Path to environment.prod.ts
const envProdPath = path.join(
  __dirname,
  "../src/environments/environment.prod.ts",
);

// Read the file
let envContent = fs.readFileSync(envProdPath, "utf-8");

// Replace placeholders with actual values (handle both quoted and unquoted cases)
envContent = envContent.replace(
  /RAPIDAPI_KEY:\s*['"`][^'"`]*['"`]/,
  `RAPIDAPI_KEY: '${RAPIDAPI_KEY}'`,
);

envContent = envContent.replace(
  /RAWG_API_KEY:\s*['"`][^'"`]*['"`]/,
  `RAWG_API_KEY: '${RAWG_API_KEY}'`,
);

// Write the file back
fs.writeFileSync(envProdPath, envContent, "utf-8");

console.log("✓ Environment variables injected successfully");
console.log(
  `  - RAPIDAPI_KEY: ${RAPIDAPI_KEY ? "***" + RAPIDAPI_KEY.slice(-4) : "NOT SET"}`,
);
console.log(
  `  - RAWG_API_KEY: ${RAWG_API_KEY ? "***" + RAWG_API_KEY.slice(-4) : "NOT SET"}`,
);
