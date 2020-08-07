//assiging the function pwd to the module.exports
module.exports = function pwd() {
    process.stdout.write(process.cwd())
    process.stdout.write('\nprompt > ')
}
