import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 80, clientTracking: true });

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message);
  });

  // ws.send('something');
});