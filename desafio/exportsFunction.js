module.exports = getFlag

function getFlag(flag){
    let index = process.argv.indexOf(flag)
    let valorFlag = process.argv[index+1]
    return valorFlag
}