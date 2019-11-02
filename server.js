// import https from 'https';
import http from 'http';
import express from 'express';
import apiRouter from './api';
// import fs from 'fs';
import config from './config';
import serverRender from './serverRender';

const server = express();

// server.get('/', (req, res) => {
//   fs.readFile('./about.html', (err, data) => {
//     res.send(data.toString());
//   });
// });

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  serverRender()
    // .then((content) => console.log('serverRender выполнилась', content))
    .then((content) => res.render('index', {
      content,
    }))
    .catch(console.error);
});

server.use('/api', apiRouter);
server.use(express.static('public'));

server.listen(config.port, config.host, () => {
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
