import express from 'express'
import http from 'http'
import { Server } from 'socket.io'

// Criação de um server com req/res e outro com sockets
const app = express()

const serverHttp = http.createServer(app)

const io = new Server(serverHttp)

export { serverHttp, io }