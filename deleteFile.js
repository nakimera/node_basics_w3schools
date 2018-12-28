var fs = require('fs');

fs.unlink('myNewFile.txt', function(err) {
    if(err) throw err;
    console.log('File deleted!');
});

