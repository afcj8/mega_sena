function sortear() {
    var resultado = document.getElementById("resultado");
    var vetor = [];
    while (vetor.length < 6) {
      var sorteio = parseInt(Math.random() * 61);
      if (sorteio != 0) {
        if (vetor.indexOf(sorteio) === -1) {
          vetor.push(sorteio);
        }
      }
    }
    resultado.innerHTML = `{ ${vetor.join(", ")} }`;
}