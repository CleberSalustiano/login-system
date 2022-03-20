import express from 'express';
import {uuid, isUuid} from 'uuidv4';
import cors from 'cors'; 

const app = express();
let users: object[]
users = []

function createUser(name:string, email:string, password:string) {
  const user = {
    name, email, password
  }

  return user
}

app.get('/users', (request, response) => {
  return response.json(users)
})

app.post('/create', (request, response) => {
  const user = request.body;
  console.log(user)
  

  // const user = createUser(name, email, password)
  
  // if(!user){
  //   return response.status(400).json({erro: "Deu muito ruim"})
  // }
  
  // users.push(user)
  // return response.json({user})

})



module.exports = app;
