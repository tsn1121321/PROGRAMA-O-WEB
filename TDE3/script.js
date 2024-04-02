document.getElementById("btnEnviar").addEventListener("click", function() {
    // Lista de personagens do filme Carros
    var personagens = ['Relâmpago McQueen', 'Mate', 'Doc Hudson', 'Sally Carrera', 'Luigi', 'Guido', 'Mack', 'Flo'];
  
    // Seleciona aleatoriamente um personagem da lista
    var personagemAleatorio = personagens[Math.floor(Math.random() * personagens.length)];
  
    // Exibe o nome do personagem selecionado
    alert('Personagem selecionado: ' + personagemAleatorio);
    document.getElementById("btnEnviar").style.display = "none";
});
