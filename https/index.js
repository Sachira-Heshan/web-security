import express from 'express'
import fs from 'fs'
import path from 'path'
import https from 'https'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send("/ endpoint in https server")
})

app.get('/api', (req, res) => {
    res.send("/api endpoint in https server")
})

https.createServer({
    key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
    cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem'))
}, app).listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

