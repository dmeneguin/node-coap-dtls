var coap = require('../index.js') // or coap

var url = {
  protocol: 'coap:',
  hostname: '127.0.0.1',
  port: '5683',
  pathname: '/oic/res',
  method: 'POST'
}

var req = coap.request( url,
                        null,
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
