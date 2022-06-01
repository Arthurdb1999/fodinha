import express from 'express'
import http from 'http'
import { Server } from 'socket.io'
import routes from './routes'

// Criação de um server com req/res e outro com sockets
const app = express()

app.use(express.json())
app.use(routes)

const serverHttp = http.createServer(app)

const io = new Server(serverHttp, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST", "DELETE"]
    }
})

export { serverHttp, io }