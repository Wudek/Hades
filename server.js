"use strict";
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
// Config
//app.set('port', 3000 || process.env.PORT);
app.locals.pretty = true;
app.set('port', 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.cookieParser('your secret here'));
app.use(express.session());
app.use(express.static(path.join(__dirname, 'public')));
app.use(app.router);
// Dev only Config
if ('development' === app.get('env'))
{
	app.use(express.errorHandler());
}
//Routes
var routes = require('./routes');
var api = require('./routes/api');
app.get('/', routes.index);
app.get('/partial/:name', routes.partial);
app.get('/api/test', api.test);
app.get('/api/*', api.apiError);
app.get('/*', routes.index);
//Socket.io Config
io.sockets.on('connection', function(socket){
	socket.emit('news', {hello:'world'});
	socket.on('my other event', function(data){
		console.log(data);
	});
});
//Final Configuration
server.listen(app.get('port'), function ()
{
	console.log('Express server listening on port ' + app.get('port'));
});
