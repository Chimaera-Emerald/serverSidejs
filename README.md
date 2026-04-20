# Server Side JavaScript — Node.js REST API

A REST API built with Node.js and Express that serves student data from a JSON file.

## Stack
- Node.js
- Express
- CORS

## Run the project

```bash
npm install
npm run dev
```

Server runs on `http://localhost:3000`

## Endpoints

| Method | URL | Description |
|--------|-----|-------------|
| GET | /api/students | Get all students |
| GET | /api/students/:id | Get a student by ID |
| POST | /api/students | Create a new student |
| PUT | /api/students/:id | Update a student |
| DELETE | /api/students/:id | Delete a student |

## Project Structure

```
├── index.js
├── students.json
├── routes/
│   └── students.js
├── controllers/
│   └── studentsController.js
└── services/
    └── studentsService.js
```
