const express = require('express');
const app = express();
const server = require('http').createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors');
const models = require('./models');

// express config
app.use(express.static('client/build'));
app.use(bodyParser.json());
app.use(cors());

// production mode only
if (process.env.NODE_ENV === 'production') {
	const path = require('path');
	app.get('/*', (req, res) => {
		res.sendfile(path.resolve(__dirname, '../client', 'build', 'index.html'));
	});
}

// routes
require('./routes')(app);

const listen = port => {
	models.sequelize
		.sync({ force: true })
		.then(() => {
			server.listen(port, () => {
				console.log('http server is running on port', port);
			});
		})
		.catch(error => {
			console.log('db sync failed');
			throw error;
		});
};

module.exports = {
	listen
};
