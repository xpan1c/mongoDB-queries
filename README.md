# mongoDB-queries
This repository contains example queries for a MongoDB database containing restaurant information.

## Requirements

Before you start, make sure you have the following installed:

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## Setup

1. Clone this repository to your local machine.
2. Ensure you have Docker and Docker Compose installed and running.
## Usage

First, start the MongoDB container using Docker Compose by running the following command at the root of the project:

```bash
docker-compose up -d
```
This command will start the container in "detached" mode (-d), meaning it will continue running in the background.

3. To stop and remove the MongoDB container, run the following command:

```bash 
docker-compose down
```

## MongoDB Shell Solution

Run the following command at the project root:

```bash

docker compose exec mongo mongosh -u root -p example --authenticationDatabase admin mydb queries.js
```
This solution will execute the queries and display the results in the console.

## Additional Resources

For more information on seeding MongoDB with Docker Compose, refer to this blog post:

[Seeding MongoDB using Docker Compose](https://shantanoo-desai.github.io/posts/technology/seeding-mongodb-docker-compose/)

[AmigosCode MongoDB course](https://amigoscode.com/courses/enrolled/1411080)