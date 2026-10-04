# Buscasofa

A web application for exploring petrol stations and comparing fuel prices in Spain. Built with React, Vite and Leaflet as a collaborative PFU academic project.

The interface is currently in Spanish.

## Features

- Browse stations in a paginated table with 20 results per page.
- Filter by province, municipality and fuel availability.
- Sort diesel and petrol prices when a fuel filter is selected.
- Explore nearby stations on an interactive map.
- Filter map results by station name and distance, from 1 to 30 km.
- Use browser geolocation or drag the location marker to another position. Madrid is used as a fallback when geolocation is unavailable or denied.
- Open station details from the table or map.
- Register, sign in and access a protected profile page.
- Post comments and replies, with editing and deletion controls.

Account and comment features require the companion backend.

## Technology

- React 19 and React Router 7
- Vite 6
- JavaScript and selected TypeScript/TSX components
- Leaflet and React Leaflet
- Cypress and Cucumber
- ESLint

## Data source

The frontend fetches station and fuel-price data directly from the Spanish government's fuel-price REST service:

https://sedeaplicaciones.minetur.gob.es/ServiciosRESTCarburantes/PreciosCarburantes/EstacionesTerrestres/

Data availability and freshness depend on the external service. The application loads the dataset on startup; it does not implement automatic periodic refresh.

## Getting started

Validated locally with Node.js **22.23.3** and npm **10.9.9**.

```bash
git clone https://github.com/rubiwan/buscasofa.git
cd buscasofa
npm ci
npm run dev
```

Open the address printed by Vite, normally:

http://localhost:5173

Internet access is required for fuel data and map tiles.

### Backend

Use the companion repository:

https://github.com/rubiwan/buscasofa-server

Follow its README to install dependencies, configure `JWT_SECRET` and start the server.

Frontend API requests currently use `http://localhost:4000`. Keep the backend running while using account and comment features or running tests that depend on them.

## Routes

| Route | Page |
| --- | --- |
| `/` | Home |
| `/lista` | Station table |
| `/mapa` | Station map |
| `/station/:id` | Station details |
| `/registro` | Registration |
| `/login` | Login |
| `/perfil` | Protected user profile |
| `/about` | Project information |
| Other paths | Page not found |

## Development commands

```bash
npm run dev       # Start the development server
npm run build     # Generate the production bundle
npm run preview   # Preview the production bundle
npm run lint      # Run ESLint
```

The production bundle is generated in `dist/`.

## Tests

Start the frontend in a separate terminal:

```bash
npm run dev
```

Open Cypress interactively:

```bash
npm run cypress:open
```

Run the navigation checks validated during maintenance:

```bash
npx cypress run \
  --spec "cypress/e2e/header.cy.js,cypress/e2e/features/header.feature,cypress/e2e/features/notfound.feature" \
  --browser chrome
```

Chrome must be installed for this command.

To run the complete configured end-to-end suite:

```bash
npm run cypress:run -- --browser chrome
```

Some tests require the backend and external services. The complete suite has not yet been validated during this maintenance work.

Generated Cypress screenshots and videos are excluded from version control.

## Validation

Checked locally on 4 October 2026:

- Production build completed successfully.
- ESLint completed without errors or warnings.
- Seven selected navigation tests passed in Chrome, including Cucumber scenarios.
- `npm audit` reported no known vulnerabilities for the dependency configuration checked during maintenance.

These checks do not cover every feature or guarantee that the application is free of security issues.

## Current limitations

- Backend URLs are hardcoded for local development.
- Map tiles currently use an HTTP URL, which can be blocked when the application is served over HTTPS.
- ESLint currently checks JavaScript and JSX files; TSX components are not covered by this configuration.
- The build command does not include a separate TypeScript type check.
- GitHub Pages deployment needs additional configuration for the base path and client-side routes.
- Comment ownership must be enforced by the backend before exposing the application to untrusted users.

### Dependency maintenance

The current configuration uses temporary dependency overrides for Mocha's `diff` and `serialize-javascript` dependencies, and for `shelljs` under `find-cypress-specs`.

`gh-pages` is pinned to version `6.1.1` to avoid the affected `braces` dependency chain. This introduces older dependencies with deprecation warnings.

Review these choices when upstream fixes become available. The `gh-pages` CLI was checked locally, but a deployment was not tested.

## Credits

Originally developed collaboratively  [Anabel Díaz](https://github.com/rubiwan) and [Emilio Quechen](https://github.com/eQuechen). 
This fork contains subsequent cleanup and maintenance by rubiwan.