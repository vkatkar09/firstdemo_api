var express = require('express'),
	morgan = require('morgan'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	bearerToken = require('express-bearer-token'),
	
	releases = require('./api/releases');


var app = express();

var port = process.env.PORT || 3030;

app.use(cors());
app.use(morgan('dev'));
app.use(bearerToken());
app.disable('x-powered-by');
app.get('/healthcheck', require('express-healthcheck')());
app.use(express.urlencoded());
app.use(express.json());

var router = express.Router();
router.use('/releases', releases);
app.use('/api', router);

app.listen(port);
console.log('Start server at http://localhost:' + port);
