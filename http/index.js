import express from 'express'
import http from 'http'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("/ endpoint in http server")
})

app.get('/api', (req, res) => {
    res.send("/api endpoint in http server")
})

http.createServer(app).listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

