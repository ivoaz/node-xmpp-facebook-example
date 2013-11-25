var settings = require('./settings');
var xmpp = require('node-xmpp');

var facebook = new xmpp.Client({
  jid: '-' + settings.user_id + '@chat.facebook.com',
  api_key: settings.app_id,
  access_token: settings.access_token,
  host: 'chat.facebook.com'
});

facebook.on('connection', function () {
  console.log('Connecting');
});

facebook.on('online', function() {
  console.log('Online');
});

facebook.on('stanza', function (stanza) {
  console.log('Incoming stanza: ', stanza.toString());
});

facebook.on('error', function(err) {
  console.error(err);
});
