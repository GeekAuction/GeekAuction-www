var express  = require('express');
var http     = require('http');
var path     = require('path');
var ejs      = require('ejs');
var ejsl     = require('ejs-locals');

var config   = require('./config');

var context = {
    page: {
        title: 'GeekAuction'
    }
};

var app = express();

app.engine('ejs', ejsl);
app.set('views', 'templates');
app.set('view engine', 'ejs');

app.use(express.favicon(path.join(__dirname, 'public/favicon.ico')));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, resp, next) {
    resp.render('index', context);
});

var server = http.createServer(app).listen(config.get('port'));