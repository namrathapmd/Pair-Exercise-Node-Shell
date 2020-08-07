//prompt
process.stdout.write('prompt > ')

//importing the function from pwd.js
const cwdFunc = require('./pwd.js')
const lsFunc = require('./ls.js')
const catFunc = require('./cat.js')
//get data from user
process.stdin.on('data', (data) => {
 const cmd = data.toString().trim();

 switch(cmd) {
    case 'pwd': cwdFunc()
    case 'ls': lsFunc()
    case 'cat': catFunc()
 }
})


