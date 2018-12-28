var fs = require('fs');

fs.rename('date.js', 'currentDate.js', function(err) {
    if(err) throw err;
    console.log('File renamed!');
})

