const fs = require('fs');
const path =require('./pwd.js')

// fs.open( filename, flags, mode, callback )


module.exports = fs.open(path(),'r',(err,files)=> {
    if(err) {
      throw err
    }
    else {
      process.stdout.write(files.join('\n'))
      process.stdout.write("\nprompt > ")
     }
  })