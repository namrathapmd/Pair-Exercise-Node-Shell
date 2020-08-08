//prompt
process.stdout.write('prompt > ')

//importing the function from pwd.js
const cwdFunc = require('./pwd.js')
const lsFunc = require('./ls.js')
const catFunc = require('./cat.js')
//get data from user
process.stdin.on('data', (data) => {
 const cmd = data.toString().trim();

 if(cmd === 'pwd') cwdFunc()
 else if (cmd === 'ls') lsFunc()
 else if (cmd.slice(0,3) === 'cat') {
   const fileName = cmd.split(' ')[1]
   catFunc(fileName)
}
})


