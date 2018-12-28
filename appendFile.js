var fs = require('fs');

fs.appendFile('myNewFile.txt', 'You are awesome!', function(err){
    if(err) throw err;
    console.log('File updated!');
})

