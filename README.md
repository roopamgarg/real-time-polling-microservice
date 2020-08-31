# Real Time Polling Microservice API
To Perform Real Time Polling In any application.

[Using Clean Architecture for Microservice APIs in Node.js with MongoDB and Express](https://www.youtube.com/watch?v=CnailTcJV_U)

> In this video we talk about Bob Martin's Clean Architecture model and I will show you how we can apply it to a Microservice built in node.js with MongoDB and Express JS - @arcdev1

## Features
* Publish new Poll 
* Real Time voting in a poll(via [socket.io](https://socket.io/))

## Running Locally

#### Prerequisites
* [Git](https://git-scm.com/downloads)
* [Node JS](https://nodejs.org/en/)
* [Mongo DB](https://www.mongodb.com)



#### 1. Clone the repo and install dependencies
```bash
git clone https://github.com/roopamgarg/real-time-polling-microservice.git
cd real-time-polling-microservice
npm i
```

#### 3. Startup your MongoDB
Usually this is just: `mongod` on the command line.

#### 4. Start the server
```bash
npm start
```

To run in development mode where code is run by [babel-node](https://babeljs.io/docs/en/babel-node) via [nodemon](https://nodemon.io) and re-transpiled any time there is a change:
```bash
npm run dev
```