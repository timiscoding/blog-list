# Blog List app

**An app that lets users manage blog links, share, like and comment.**

**[Try it out]()**

Test username/password: **tim / tim**

Frontend: React, Redux, Styled-components, Storybook

Backend: Node, Express, MongoDB, Mongoose

This project started out as my submission in part 7 of the
[Full Stack course](https://fullstackopen.com/en/part7)
to learn redux and grew from there.

## Dev build

Requirements (works on version):

- node 11.10
- mongodb v3.4 or mongo cloud - sign up for a
  [free account](https://www.mongodb.com/cloud)

Server secrets are stored in `.env` in project root so create the env
vars like the example below:

```
MONGODB_URI=mongodb+srv://tim:<password>@fullstackopen-9zjso.mongodb.net/blog-list?retryWrites=true&w=majority
PORT=3003
SECRET=jsonwebtokensuperdupersecret
```

The client uses create-react-app and proxies all backend requests.
In order for the client to talk to the server, the port chosen above
needs to match the one inside `package.json` in `/client`

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

## Notes

Things I added on top of the project requirements:

- pagination with client caching
- sort by fields
- multiple blog deletion
- form validation
- a design system...sort of (check out the storybook)
- notifications
- mobile responsive
- react-spring animations

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
