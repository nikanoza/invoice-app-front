# Invoice app

### Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#Tech-Stack)
- [Getting Started](#Getting-Started)
- [Project Structure](#Project-Structure)
- [Deployment](#Deployment)

#

### Prerequisites

- Node JS @16.X and up
- npm @8 and up
- typescript @4 and up

#

### Tech Stack

- React @18.2.0 - front-end framework
- styled-components @5.3.6 - CSS framework
- react-hook-form @7.41.3 - flexible and extensible forms with easy-to-use validation.
- react-router @6.4.3 - Declarative routing for React apps at any scale
- zod @3.20.2 - TypeScript library for creating and validating complex object schemas.
- Axios @1.2.1 - Promise based HTTP client for the browser and node.js

#

### Getting Started

1. First of all you need to clone app repository from github:

```
git clone https://github.com/nikanoza/invoice-app-front.git
```

2. Next step requires install all the dependencies.

```
npm install
```

3. To see project in action

```
npm start
```

#

### Project Structure

```
|--- src
|   |--- components # reusable components
|   |---|--- index.ts # export all components
|   |--- pages # page components folder
|   |--- svg # svg components folder
|   - helpers.ts # helper functions
|   - schema.ts # zod schema for validation
|   - services.ts # axios request file
|   - types.d.ts # types definition file
- package.json     # dependency manager configurations
```

#

### Deployment

Before every deployment you need to create build file.

```
npm run build
```

after this you can use this file to deploy project on server.

#
