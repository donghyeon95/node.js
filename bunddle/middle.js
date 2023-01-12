import fs from 'fs';
// import settings from 'settings'
import winston from 'winston';
import 'winston-daily-rotate-file';

// const appRoot = settings.process.PROJECT_DIR;
const appRoot = process.env.PWD;
console.log(appRoot);
console.log(new Date().getTimezoneOffset());

const getIP = function getIP(req) {
  const ip = req.headers['x-forwarded-for'] ||
    //req.headers['x-real-ip'] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  return ip;
}

//s3 사용, 로그 적재 
const httpLogger = function httpLogger(req, res, next) {
  const ip = getIP(req);
  const date = new Date();

  const transport = new (winston.transports.DailyRotateFile)({
    filename: `${appRoot}/logs/application-%DATE%.log`,
    maxSize: 1024,
    datePattern: 'YYYY-MM-DD-HH',
    timestamp: new Date().toString(),
  });

  const logger = winston.createLogger({
    transports: [
      transport
    ],
  })

  next();
};

// Authentication 
const auth = function auth(req, res, next) {
  next();
};

export { httpLogger, auth };

//// data parse
// module.exports.JSONParser = function JSONParser(req, res, next) {
  // let body = '';
  // req.on('data', (data) => {
  //   body += data;
  //   console.log("body", body);3
  // })

  // req.on('end', () => {
  //   console.log("end");
  //   req.body = JSON.parse(body);
  //   console.log(req.body);
  //   next();
  // })
// };

