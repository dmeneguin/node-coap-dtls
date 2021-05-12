const coap    = require('../') // or coap
const path    = require('path');

const server  = coap.createServer(
  {
    port: 5683,
  }
);

server.on('request', function(req, res) {
  var payload = JSON.parse(req.payload.toString());
  console.log('method:'+req.method+' url:'+req.url+' payload:'+JSON.stringify(payload));
  res.end('Hello ' + req.url.split('/')[1] + '\n')
})

server.listen(function() {
  console.log('server started')
});
