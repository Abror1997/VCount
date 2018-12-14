const http = require('./http');
const tcp = require('./tcp');

http.listen(3001);
tcp.listen(80);
