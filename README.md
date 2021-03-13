# dev-ed-reactjs
Learn reactjs with react js tutorial by Dev Ed 

## Dependencies needed
- Node - download and install from - https://nodejs.org/en/
- Install 'create-react-app' with npm
   
  ```
  npm install create-react-app
  ```
  - ##### create-react-app
    
    create-react-app is a package that kind of sets everything up for us the whole environment to start writing react code without us doing any preparation.

## How to create an app in reactjs ?
  - npx create-react-app <YOUR-APPNAME>
  - cd <YOUR-APPNAME>
  - npm start


  - If you get an error like this -> 'The engine "node" is incompatible with this module. Expected version "^6.0.0". Got "12.14.1". Then,
   Try to install a specific version of node by ' npm install node@<version>' this command and try again.

## Error : There might be a problem with the project dependency tree.It is likely not a bug in Create React App, but something you need to fix locally. 
- It is happen becouse of there is a different version of node module installed globaly in your system. we need to remove that node module.Follow the steps(keep in mind :  rm -rf is a powerful command.)
- Run 'cd ~'
- Run 'ls'
- Run 'rm -rf node_modules' and try angain run the app

## Folder structure in react app
- Node modules
  - WhatNode module is that all the packages that we install using npm.

- Public
  - contain index.html and some to other files.

- .gitignore
  - .gitignore helps to ignore the files inside it from the git commit,push functions.

- package-lock.json
  - Hold the details of specific version of all the packages that we have included in this project.

- package.json
  - It contains some scripts

  ## What is a component?
  - A component is a file that holds all the logic,html and even styling in one file.

  # Redux
  - Redux is an open-source JavaScript library for managing application state. It is most commonly used with libraries such as React or Angular for building user interfaces.
  - To install run 'npm install redux react-redux'
      In this redux in the actually state management. react-redux gives us to ability to connect react and redux together. 
  - Store,Action,Reducer
  - Store - It is a globalized state.
  - Action - It just give whatever want to do(what function is need to happen).
  - Reducer - How your actions transform the state into next state.
  - Dispatch - Dispatch is like an intermediate.
