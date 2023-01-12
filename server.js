import main from './app/main.js';
import birds from './app/birds.js';
import envSave from './app/envSave/getData.js';
import { httpLogger, auth } from './bunddle/middle.js';
import express from 'express';
import WebSocketServer from 'ws';
import * as mqtt from "mqtt"

const app = express();
const port = process.env.PORT || 4020;

// middelwares
// app.use(cors);

app.use(express.json());
// app.set('trust proxy', true);
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// app.use(middle.JSONParser);
// app.use(auth);
app.use(httpLogger);

// routing
// app.use('/', main);
// middle.JSONParser();
// app.use('/birds', birds);
app.use('/', envSave);

app.post('/post', (req, res) => {
  const body = req.body;
  console.log("/post");
  console.log(body);
  res.send("HIHI");
})

const HTTPServer = app.listen(port, () => {
  console.log(`server is listening at localhost: ${port}`);
})

// make websocket 
const webSocketServer = new WebSocketServer.Server({
  server: HTTPServer
});

// const webSocketList = new Set();

webSocketServer.on('connection', (ws, req) => {
  // webSocketList.add(ws);
  console.log(ws._socket.remoteAddress);
  console.log(ws);
  ws.on('message', (msg) => {
    console.log(`${msg}`);
  })
})

const client = mqtt.connect("mqtt://lms.nexton.ag:1883");

client.publish('test', JSON.stringify({
  ts: new Date(),
  value: 'hello mqtt'
}))

client.on('message', (topic, message) => {
  console.log()
})
