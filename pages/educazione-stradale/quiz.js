function submitQuiz() {
    let score = 0;

    for (var answer of document.querySelectorAll(`input[type="radio"]:checked`))
        score+=parseInt(answer.value);

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `<h2>Il tuo punteggio: ${score}/20</h2>`;
    if (score === 15) {
        resultDiv.innerHTML += "<p>Perfetto! Conosci tutte le regole della strada.</p>";
    } else if (score >= 13) {
        resultDiv.innerHTML += "<p>Ottimo lavoro! Sei quasi un esperto.</p>";
    } else {
        resultDiv.innerHTML += "<p>Devi studiare di più. Dai un'occhiata alla sezione Lezione!</p>";
    }
};