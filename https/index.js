import express from 'express'
import https from 'https'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("Hello, welcome!")
})

https.createServer(app).listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

