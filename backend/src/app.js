"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let users;
users = [];
function createUser(name, email, password) {
    const user = {
        name, email, password
    };
    return user;
}
app.get('/users', (request, response) => {
    return response.json(users);
});

type RequestBody = {
    id: number,
    name: string,
    birthDate: Date
}

app.post('/create', (request, response) => {
    const user = request.body as RequestBody;
    console.log(user);
    // const user = createUser(name, email, password)
    // if(!user){
    //   return response.status(400).json({erro: "Deu muito ruim"})
    // }
    // users.push(user)
    // return response.json({user})
});
module.exports = app;
