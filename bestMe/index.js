const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? E o que eu poderia fazer para melhorar?",
    "O que me deixou feliz?",
    "Quantas pessoas eu ajudei?",
]

const ask = ( index = 0 ) => {
    process.stdout.write("\n" + questions[index] + ' > ')
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim()) 
    if (answers.length < questions.length){
        ask(answers.length)
    } else {
        process.exit()
    }
    
})

process.on('exit', () => {
    console.log(`
        Muito bom, Luis, é bom ver seu progresso!!

        O que você aprendeu hoje foi:
        ${answers[0]}

        O que te aborreceu hoje foi:
        ${answers[1]}

        O que te deixou feliz hoje foi:
        ${answers[2]}

        E você ajudou ${answers[3]} hoje
    `)
})