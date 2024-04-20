"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require("express");
const express_1 = __importDefault(require("express"));
const port = 4300;
// Explicitly declare types
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    res.send("Learning Typescript Auto mode..done it");
});
app.get("/ok", (req, res) => {
    res.send("did Typescript automated");
});
app.get("/yes", (req, res) => {
    res.send("Its very easy");
});
app.listen(port, () => {
    console.log(`Running on ${port}!!`);
});
