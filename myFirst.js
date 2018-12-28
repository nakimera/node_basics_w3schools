var http = require('http');
var date = require('./currentDate');

http
  .createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // res.write(req.url);
    res.write(
      'Hello Prossie!. The date and time is currently: ' + date.myDateTime()
    );
    res.end();
  })
  .listen(8080);


// module.exports.myDate = date; 
// console.log(module);