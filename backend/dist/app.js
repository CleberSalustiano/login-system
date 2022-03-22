"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let users;
users = [];
app.use(express_1.default.json());
app.get('/users', (request, response) => {
    return response.json(users);
});
app.post('/create', (request, response) => {
    console.log(request.body);
});
exports.default = app;
