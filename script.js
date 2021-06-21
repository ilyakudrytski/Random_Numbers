function randomNumbers(m, n) {
    var arrayQuestions = [];
    for (var i = 0; i < 7; i++) {

        let randomNumber = Math.floor(Math.random() * (m - n + 1)) + n;

        if (arrayQuestions.indexOf(randomNumber) === -1) {
            arrayQuestions.push(randomNumber)
        }

    }
    return arrayQuestions
}
console.log(randomNumbers(50, 1))