const express = require('express')
const mongoose = require('mongoose')
const Membro = require('./models/Membro')
require('dotenv').config()
const { HTTP_PORT, MONGO_URI } = process.env;

const app = express()
app.use(express.json())

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("mongodb conectado com sucesso!");

        app.listen(HTTP_PORT, () => {
            console.log(`Estou conectado na porta ${HTTP_PORT}`);
        });
    })
    .catch((error) => {
        console.log("erro ao conectar com o mongodb: ", error);
    });



app.get('/', (req, res) => {
    res.send('Hello world')
})

app.post("/membros", async (req, res) => {
    try {
        const membro = await Membro.create(req.body)
        res.status(201).json(membro)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

