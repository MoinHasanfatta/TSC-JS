// const express = require("express");
import express, {Express, Request, Response} from "express";
const port = 4300;
// Explicitly declare types
const app : Express = express();

app.get("/", (req : Request, res : Response) => {
    res.send("Learning Typescript Auto mode..done it")
})
app.get("/ok", (req : Request, res : Response) => {
    res.send("did Typescript automated")
})
app.get("/yes", (req : Request, res : Response) => {
    res.send("Its very easy")
})

app.listen(port, () => {
    console.log(`Running on ${port}!!`)
})