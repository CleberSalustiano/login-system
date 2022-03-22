import express from 'express';
import {uuid, isUuid} from 'uuidv4';
import createUser from './services/CreateUser';
import cors from 'cors'; 

const app = express();
let users: object[]
users = []

app.use(express.json())

app.get('/users', (request, response) => {
  return response.json(users)
})

app.post('/create', (request, response) => {
  const {name, login, password, email} = request.body;
})

export default app;
