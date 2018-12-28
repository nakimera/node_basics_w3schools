var url = require('url');
var address = 'http://localhost:8080/default.html?year=2017&month=february';
var q = url.parse(address, true);

console.log('host ----->', q.host);
console.log('protocol ----->', q.protocol);
console.log('pathname ----->', q.pathname);
console.log('path ----->', q.path);
console.log('port ----->', q.port);
console.log('query ----->', q.query);
console.log('year ----->', q.query.year);
console.log('month ----->', q.query.month);
