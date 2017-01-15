"use strict";

let http = require('http'),
    express = require('express'),
    path = require('path'),
    logger = require('morgan'),
    cookieParser = require('cookie-parser'),
    bodyParser = require('body-parser'),
    favicon = require('serve-favicon'),
    MongoClient = require('mongodb').MongoClient;

const app = express()
const PORT = 1336

app.set('port', PORT)

app.use(favicon(__dirname + '/src/assets/logo.png'))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'dist')))

app.get('/', (req, res, next) => {
    res.render('index')
})

let params = {
    ja: {message: {hello: 'こんにちは、世界'}},
    vi: {message: {hello: 'xin chào'}},
    en: {message: {hello: 'hello'}}
}

app.get('/api/expect/:code', (req, res) => {
    console.log(req.params.code)

    if (req.params.code in params) {
        res.status(200).json(params[req.params.code])
    } else {
        res.status(404).json({message: "Not Found!"})
    }
})

app.post('/api/mongodb/connection', (req, res) => {
    let URI = 'mongodb://localhost:27017/example';

    MongoClient.connect(URI).then(db => {
        res.json({
            status: 1,
            message: "Connected!!"
        });
    }).catch(err => {
        res.json({
            status: 0,
            message: err.message,
        });
    })
})

// catch 404 and forward to error handler
app.use((req, res, next) => {
    let err = new Error('Not Found')
    err.status = 404
    next(err)
})

// development errors handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err, req, res, next) => {
        res.status(err.status || 500)
        res.render('error', {
            message: err.message,
            error: err
        })
    })
}

// production errors handler
// no stacktrace leaked to user
app.use((err, req, res, next) => {
    res.status(err.status || 500)
    res.render('error', {
        message: err.message,
        error: {}
    })
})

/**
 * Event listener for HTTP server "error" event.
 */

let onError = function (error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    let bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

let onListening = function () {
    let addr = server.address();
    let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    console.log('Listening on ' + bind);
}

const server = http.createServer(app)
server.listen(PORT)
server.on('error', onError)
server.on('listening', onListening)