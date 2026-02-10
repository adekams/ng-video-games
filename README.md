# VideoGames Database

An Angular application that displays video game information from the RAWG Video Games Database. Browse, search, and filter games by platform and other criteria.

## Features

- Browse video game database
- Search games by title
- Filter by platform, genre, and other attributes
- View detailed game information
- Signal-based state management
- Responsive design with SCSS styling

## Prerequisites

- Node.js 20+ and npm 10+
- Angular CLI 19+
- Valid API keys from:
  - [RapidAPI](https://rapidapi.com) - for RAWG Video Games Database API
  - [RAWG.io](https://rawg.io/apidocs) - Optional direct API access

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/adekams/ng-video-games.git
cd ng-video-games
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure API Keys

1. Copy the environment template:

   ```bash
   cp src/environments/environment.ts.example src/environments/environment.ts
   ```

2. Add your API keys to `src/environments/environment.ts`:
   - Get `RAPIDAPI_KEY` from [RapidAPI](https://rapidapi.com/api-sports/api/api-sports)
   - Get `RAWG_API_KEY` from [RAWG.io](https://rawg.io/apidocs)

   ```typescript
   export const environment = {
     production: false,
     API_URL: "https://rawg-video-games-database.p.rapidapi.com",
     RAPIDAPI_KEY: "YOUR_RAPIDAPI_KEY_HERE",
     RAWG_API_KEY: "YOUR_RAWG_API_KEY_HERE",
   };
   ```

**⚠️ Important**: Never commit `environment.ts` with real API keys. The file is in `.gitignore` for security.

## Development

### Development server

```bash
ng serve
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any source files.

### Code scaffolding

Generate a new component:

```bash
ng generate component component-name
```

You can also use: `ng generate directive|pipe|service|class|guard|interface|enum|module`

### Build

```bash
ng build
```

Build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build:

```bash
ng build --prod
```

### Running unit tests

```bash
ng test
```

Execute unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

```bash
ng e2e
```

Execute end-to-end tests via [Protractor](http://www.protractortest.org/).

## Project Structure

```
src/
├── app/
│   ├── components/          # Angular components
│   ├── services/            # Application services
│   ├── interceptors/        # HTTP interceptors
│   ├── models/              # Data models
│   └── app.config.ts        # App configuration
├── environments/            # Environment-specific settings
├── assets/                  # Static assets
└── styles.scss             # Global styles
```

## Technologies

- **Angular 19** - Frontend framework
- **TypeScript 5.8+** - Programming language
- **RxJS 6.6** - Reactive programming
- **SCSS** - Styling
- **Karma** - Unit testing
- **Protractor** - E2E testing
- **ESLint** - Code linting

## Additional Resources

- [Angular CLI Overview](https://angular.io/cli)
- [RAWG API Documentation](https://rawg.io/apidocs)
- [Angular Documentation](https://angular.io/docs)
