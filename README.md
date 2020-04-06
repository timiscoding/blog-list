# <p align="center"> Blog List app </p>

### <p align="center">An app that lets users manage blog links, share, like and comment.</p>

### <p align="center"><a href="https://blog-list-pi.now.sh/">Try it out</a></p>

<p align="center">Test username/password: tim / tim</p>

## About

Frontend: React, Redux, Styled-components, Storybook

Backend: Node, Express, MongoDB, Mongoose, Jest

This project started out as my submission in part 7 of the
[Full Stack course](https://fullstackopen.com/en/part7)
to learn redux and grew from there.

## Dev build

Server requirements (works on version):

- node 11.10
- mongodb v3.4 or mongo cloud - sign up for a
  [free account](https://www.mongodb.com/cloud)

Secrets are stored in `/server/.env`. See `/server/.env.example`.

The client uses create-react-app and proxies all backend requests.
In order for the client to talk to the server, the port chosen in `.env`
needs to match the one in `/client/package.json`

```
"proxy": "http://localhost:3003",
```

Run `npm i` in `/client` and `/server`

## Running locally

In `/client`:

```
npm start
npm run server
npm run storybook (for visual testing)
```

## Additional

Things I added on top of the project requirements:

- [x] pagination with client caching
- [x] sort by fields
- [x] multiple blog deletion
- [x] form validation
- [x] a design system...sort of (check out the storybook)
- [x] notifications
- [x] mobile responsive
- [x] react-spring animations

## Outcome

Learnt some notable things:

- Redux
  - normalizing data reduces stale data, improves performance
  - co-locating selectors in reducers makes refactors in state data
    structure changes easier
  - redux middleware scales better for async actions over redux thunks
- styled-components
  - not needing to name classes is a win
  - easier to remove dead code
  - dynamic styles based on props are convenient
- React hooks
  - logic reuse and less boiler plate is a major plus
  - a lot of subtle gotchas compared with classes
