# week-4
Week 4 Weekend Project

## Application

Application is deployed at: https://team9-voting.herokuapp.com/

Report: https://docs.google.com/document/d/1pdui3VWO0vndg2cEeale8jGrYal1pr_UVSW0NSR0dFY/edit?usp=sharing

### Clone project

First we clone the project from the remote git repository.
```bash
# This clones the source code
$ git clone https://github.com/Encode-Solidity-Bootcamp-Team-9/week-4.git
$ cd week-4
```

### Voting contracts

Move to correct folder
```bash
$ cd voting-contracts
```

Install the dependencies and compile the project.
```bash
$ npm install
$ npm run compile
```

Create a `.env` file and paste in your wallet private key and Alchemy api key. Both are necessary.
```
PRIVATE_KEY="***"
ALCHEMY_API_KEY="***"
```

Deploy contracts
```bash
$ npm run deploy
```

Call functions
```bash
$ npm run main <CONTRACT_NAME> <CONTRACT_ADDRESS> <FUNCTION_NAME> <PARAMS...>
```

### Backend application

Move to correct folder
```bash
$ cd voting-api
```

Copy `.env_example` file to `.env` file and set the variables.

Install the dependencies and run the app.
```bash
$ npm install
$ npm run start:dev
```

Swagger is available at: http://localhost:3000/api

### Frontend application

Move to correct folder
```bash
$ cd voting-app
```

Install the dependencies and run the app.
```bash
$ npm install
$ ng serve
```

Application is available at: http://localhost:4200
