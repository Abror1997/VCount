const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const models = require('./models');
const app = express();

app.use(express.static('client/build'));
app.use(bodyParser.json());
app.use(cors());

if (process.env.NODE_ENV === 'production') {
	const path = require('path');
	app.get('/*', (req, res) => {
		res.sendfile(path.resolve(__dirname, '../client', 'build', 'index.html'));
	});
}

require('./routes')(app);

const server = http.Server(app);

const listen = (port = 3001, host = 'localhost') => {
	models.sequelize.sync({ force: true }).then(() => {
		server.listen(port, host, () => {
			console.log('http server is running on port', port);
		});
	});
};

module.exports = {
	connect: () => server,
	listen
};
