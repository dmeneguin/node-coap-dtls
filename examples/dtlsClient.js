var coap = require('../index.js') // or coap

var dtls_opts = {
  psk:           new Buffer('AAAAAAAAAAAAAAAA'),
  PSKIdent:      new Buffer("32323232-3232-3232-3232-323232323232"),
  key:           null,
  peerPublicKey: null
};

var url = {
  protocol: 'coaps:',
  hostname: '127.0.0.1',
  port: '5684',
  pathname: '/oic/res',
  method: 'POST'
}

var req = coap.request( url,
                        dtls_opts,
                       (req) => {
                          req.on('response', function(res) {
                            res.pipe(process.stdout)
                          });
                          var payload = {
                            content: 'content of payload'
                          }
                          req.write(JSON.stringify(payload));
                          req.end();
                        }
                      );
