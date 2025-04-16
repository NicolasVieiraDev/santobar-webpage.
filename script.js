// Seleciona todas as abas e os respectivos conteúdos
const abas = document.querySelectorAll('.abas-cardapio .aba');
const conteudos = document.querySelectorAll('.conteudo-cardapio');

// Para cada aba, ao clicar, mostra o conteúdo correspondente
abas.forEach((aba) => {
  aba.addEventListener('click', function() {
    // Remove a classe ativa de todas as abas
    abas.forEach(a => a.classList.remove('ativa'));
    // Esconde todo o conteúdo
    conteudos.forEach(content => content.classList.remove('ativo'));
    
    // Adiciona a classe ativa na aba clicada
    this.classList.add('ativa');
    // Captura a categoria definida no data-atributo
    const categoria = this.getAttribute('data-categoria');
    // Mostra o conteúdo que possui o id correspondente à categoria
    document.getElementById(categoria).classList.add('ativo');
  });
});