# Capital Gain Taxes - Nubank Hiring Test
## _By Victor Lopes_


This microservice was created for the nubank hiring process. The code was created  with nodeJs using typescript and express

On this project, we use:
- NodeJs as javascript framework
- Typescript as programming language
- Express for rest api construction
- Jest for unit test
- supertest for e2e (end to end) tests
- Stryker mutator for mutation tests
- celebrate for request validation
- es6
- winston for logging and future metrics

## Features

- Calculate Taxes from an array of transactions

## Tests
The propose of the development is to  guarantee an good quality level of the implementation. To make it happen, i've wrote some unit tests tha cover 100% of line of the code.
And inside the project, there is an running for mutation tests, that put te wroted test on good quality level.

### To run the tests:
- execute all unit tests and e2e tests
  `npm run test`
- execute the mutation tests over all tests
  `npm run stryker`


### Coverage
- General coverage: 100%
- Mutation test coverage: 94%

## How to run this project

### To run on docker

Needs docker and docker-compose installed on your machine
- create a .env file from .env.docker.example
- the PORT most be 80
- alter the DOCKER_PORT as you need

### To run on local enviroment
Needs node@14
- create a .env file from .env.local.example
- alter PORT as  you need

##### Then:
`docker-compose up`
And make and request with method post:

`curl --location --request POST 'localhost:3333/retrieve-taxes' \
--header 'Content-Type: application/json' \
--data-raw '[
{
"operation": "buy",
"unit-cost": 10,
"quantity": 10000
},
{
"operation": "sell",
"unit-cost": 20,
"quantity": 5000
}
]'`

and  the response will be something like that:

`[
{
"tax": 0
},
{
"tax": 10000
}
]`

## Tech

This project uses a number of open source projects to work properly:

- [Typescript] - JavaScript With Syntax For Types.
- [Jest] - awesome web-based text editor
- [Stryker Mutator] - Test your tests with mutation testing.
- [Celebrate] - A joi validation middleware for Express.
- [Winston] - A logger for just about everything.
- [node.js] - evented I/O for the backend
- [Express] - fast node.js network app framework [@tjholowaychuk]

  [node.js]: <http://nodejs.org>
  [express]: <http://expressjs.com>
  [Typescript]: <https://www.typescriptlang.org/>
  [Stryker Mutator]: <https://stryker-mutator.io/>
  [Celebrate]: <https://github.com/arb/celebrate>
  [Winston]: <https://github.com/winstonjs/winston>
  [Jest]: <https://jestjs.io/>
