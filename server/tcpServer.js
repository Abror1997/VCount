const net = require('net');

const Device = require('./controllers/device');
const { checkJSON } = require('./helpers/validation');

const server = net.createServer(socket => {
	// socket.write('connected\n');

	const { localAddress, localPort, remoteAddress, remotePort } = socket;

	console.log('server: address, port', localAddress, localPort);
	console.log('client: address, port', remoteAddress, remotePort);

	socket.on('connect', () => {
		socket.write('connected\n');
	});

	socket.on('data', data => {
		let response = undefined;
		const jsonData = checkJSON(data);

		if (jsonData.success) {
			console.log('dataType success');
			response = {
				success: true,
				message: 'valid type'
			};
			Device.receiveData(jsonData.result);
		} else {
			console.log('dataType error', jsonData.error);
			response = {
				success: false,
				message: 'invalid type'
			};
		}

		socket.write(JSON.stringify(response) + '\n');
	});
});

const listen = port => {
	server.listen(port, () => {
		console.log('tcp server is running on port:', port);
	});
};

module.exports = {
	connect: () => server,
	listen
};
