# Twitter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Twitter (Angular Frontend)

This repository contains an Angular (TypeScript) single-page frontend for a Twitter-like social application. The app is component-driven and integrates with multiple backend microservices for users, tweets and follow/follower functionality.

## Tech stack

- Angular (TypeScript)
- RxJS (observables for async HTTP flows)
- Angular HttpClient for REST integration
- Jasmine & Karma for unit tests (.spec.ts files included)
- Firebase config (hosting) and `Jenkinsfile` for CI/CD

## Key features

- Feed, profile, search, explore and tweet components
- Profile management (view user, followers, following) and social actions (follow / unfollow)
- Route protection using Angular route guards
- Component-scoped CSS and static asset management
- Unit tests for components and services

## Repository structure (high level)

- `src/app/` — feature components and services (feed, profile, search, tweet, auth guard, etc.)
- `src/environments/` — environment-specific configuration
- `assets/` — images and static assets
- `firebase.json`, `cors.json` — deployment / CORS config
- `Jenkinsfile` — CI pipeline skeleton

## Prerequisites

- Node.js (v16+ recommended)
- npm (or yarn)
- Angular CLI (optional, recommended for development tools)
- Backend microservices for users/tweets/following must be running locally for full functionality (see "Backend services" below).

## Local development

1. Install dependencies:

```bash
npm install
```

2. Start the frontend dev server:

```bash
npm start
# or
ng serve --open
```

Open http://localhost:4200 in your browser. The app will reload on source changes.

Note: several features call backend services on localhost. Make sure the required backend services are running (see next section).

## Backend services (inferred)

This frontend expects backend microservices (examples found in the code):

- User service: http://localhost:8765 (e.g., `/users/getUser/:id`, `/users/getAllUsersDetails`)
- Follow/Follower service: http://localhost:8082 (e.g., `/followingAndFollower-api/followers/:id`, `/.../following/:id`, `/.../follow/:follower/:following`, `/.../unfollow/:follower/:following`)

If you don't have the backends running, mock the endpoints or use a lightweight API mocker to continue frontend development.

## Running tests

Unit tests are present as `.spec.ts` files and can be run via:

```bash
npm test
# or
ng test
```

## Build and deployment

Build the production bundle:

```bash
ng build --configuration production
```

Configuration for Firebase hosting and a Jenkins pipeline exist (`firebase.json`, `Jenkinsfile`) — adapt those files to your CI/CD environment as needed.

## Development notes & assumptions

- Several API URLs are hard-coded to localhost ports in service files (e.g., `ProfileService` uses ports `8765` and `8082`). These should be moved to environment configuration before deploying to non-local environments.
- `.spec.ts` files indicate unit tests were created with Jasmine/Karma.
- Angular CLI version in original scaffold was 15.x; the codebase uses TypeScript and standard Angular project layout.

## How to contribute

1. Fork the repo and create a feature branch.
2. Install dependencies and run the app locally.
3. Add unit tests for new features where appropriate.
4. Open a pull request describing the change and the testing performed.

## Useful commands

- Install dependencies: `npm install`
- Run dev server: `npm start` or `ng serve`
- Run unit tests: `npm test` or `ng test`
- Build production: `ng build --configuration production`

## Contact / Next steps

If you want, I can:
- extract env variables to `src/environments/*.ts` instead of hard-coded URLs,
- add a README section with live demo / screenshots,
- or add a short CONTRIBUTING.md and a simple Github Actions workflow for CI.

---

_Generated/updated to provide clear setup and development instructions for contributors and recruiters._
