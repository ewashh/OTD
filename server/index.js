const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();
const proxy = require('express-http-proxy');


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);
app.use('/api/contentful', proxy('cdn.contentful.com', {
    proxyReqOptDecorator: (options, srcReq) => {
        console.log(srcReq)
        options.headers['X-Test'] = 'test'
        return options
    }
}))

app.listen(6789, () =>
  console.log('Express server is running on localhost:6789')
);