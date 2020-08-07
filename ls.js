const fs = require('fs');
// const path = require('./pwd.js')

module.exports = function lsFunc() {
   fs.readdir('./',(err,files)=> {
   if(err) {
     throw err
   }
   else {
     process.stdout.write(files.join('\n'))
     process.stdout.write("\nprompt > ")
    }
 })
}
