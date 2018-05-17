'use strict';

const slackClient = require('../server/slackClient');
const service = require('../server/service');
const http = require('http');

const server = http.createServer(service);

const slackToken = 'your token here';
const rtm = slackClient.init(slackToken);
rtm.start();

server.listen(3000);

server.on('listening', function() {
    console.log(`IRIS is listening on ${server.address().port} in ${service.get('env')} mode.`);
});