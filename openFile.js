var fs = require('fs');

fs.open('myNewerFile.txt', 'w', function(err, file) {
    if(err) throw err;
    console.log('Saved!');
})
