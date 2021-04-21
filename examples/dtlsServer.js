const coap    = require('../') // or coap
const path    = require('path');

function identityPskCallback(id) {
  let psk = '';

  switch (id.toString())  {
    case 'foo':
      psk = 'asdasdadasd';
      break;
    case '32323232-3232-3232-3232-323232323232':
      psk = 'AAAAAAAAAAAAAAAA';
      break;
    default:
      psk = '';
      break;
  }

  return psk;
}

const dtls_opts = {
  key: path.join(__dirname, '../test/private.der'),
  debug: 1,
  handshakeTimeoutMin: 3000,
  identityPskCallback: identityPskCallback,
};

const server  = coap.createServer(
  {
    dtls: dtls_opts,
    port: 5684,
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
