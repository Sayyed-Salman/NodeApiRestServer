# MovieDB CRUD-based API Server

- `GET` /api/Movies

  Retrieve all Movies from the database.

  Example:

        GET http://localhost:3000/api/Movies

- `GET` /api/Movies/:id

  Retrieve a specific Movie by its ID from the database.

  Example:

        GET http://localhost:3000/api/Movies/612f332df12a9d215c729738

- `POST` /api/Movies

  Create a new Movie and add it to the database.
  Request Body: JSON object with name, img, and summary properties.

  Example:

  ```bash
  POST http://localhost:3000/api/Movies
  Content-Type: application/json

  {
  "name": "New Movie",
  "img": "https://example.com/Movie-image.jpg",
  "summary": "This is a new Movie summary."
  }
  ```

- `PUT` /api/Movies/:id

  Update a specific Movie by its ID in the database.
  Request Body: JSON object with updated name, img, and summary properties.

  Example:

  ```bash
  PUT http://localhost:3000/api/Movies/612f332df12a9d215c729738
  Content-Type: application/json

  {
  "name": "Updated Movie",
  "img": "https://example.com/updated-image.jpg",
  "summary": "This is an updated Movie summary."
  }
  ```

- `DELETE` /api/Movies/:id

  Delete a specific Movie by its ID from the database.

  Example:

        DELETE http://localhost:3000/api/Movies/612f332df12a9d215c729738

## API Server Documentation

### Requirements

- Node.js and npm installed on your machine.
- MongoDB installed and running. (or cluser uri)

### Installation

- Clone the repository: git clone https://github.com/Sayyed-Salman/NodeApiRestServer.git
- Navigate to the project folder: NodeApiRestServer
- Install dependencies: npm install

### Configuration

Create a .env file in the root of the project and set your MongoDB connection string as follows:

```bash
MONGODB_URI=mongodb://username:password@host:port/database
```

Replace username, password, host, port, and database with your MongoDB credentials and configuration.

### Usage

To start the API server, run: npm start

API Endpoints

- `GET` /api/Movies [ Retrieve all Movies from the database.]
- `GET` /api/Movies/:id [ Retrieve a specific Movie by its ID from the database.]
- `POST` /api/Movies [ Create a new Movie and add it to the database.]
- `PUT` /api/Movies/:id [ Update a specific Movie by its ID in the database.]
- `DELETE` /api/Movies/:id [ Delete a specific Movie by its ID from the database.]

## Deployed

URL: https://moviedbcreds.onrender.com

/ GET - https://moviedbcres.onrender.com/api/Movies
