# React Native Demo

Demo app of React Native and Node

## Getting Started

### Prerequisites

```
    npm i
```

### Installing

React:
```
react-native run-ios
```

Backend: 

First populate your DB while in the /server directory
```
node_modules/babel-cli/bin/babel-node.js populate.js
```

next, start the server in the /server directory
```
npm run start
```

You'll be able to see the data by going here:
```
http://127.0.0.1:3000/v1/people.json
```

## Adding Additional Endpoints
A user can create additional endpoints by adding to the router.js file in the server folder.
