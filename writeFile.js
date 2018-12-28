var fs = require('fs');

fs.writeFile('myNewestFile.txt', 'Hello Kagga!', function(err, file) {
    if(err) throw err;
    console.log('Saved!');
})
