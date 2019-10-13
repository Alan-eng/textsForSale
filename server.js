// import https from 'https';
import http from 'http';
import express from 'express';
import config from './config';

const server = express();

server.get('/', (req, res) => {
  res.send('Hello Express!!!');
});
server.listen(config.port, () => {
  console.info('Express is listening on port ', config.port);
});

// const server = http.createServer();
// console.log('Сервер создан!');
// server.listen(8080);
// server.on('request', (req, res) => {
//   res.write('Hello HTTP\n');

//   setTimeout(() => {
//     res.write('I can stream!\n');
//     res.end();
//   }, 3000);
// });
// console.log(name.peter);

// https.get('https://www.lynda.com', (res) => {
//   console.log('response status ', res.statusCode);

//   res.on('data', (chunk) => {
//     console.log(chunk.toString());
//     console.log('--------------------------------------------');
//   });
// });
