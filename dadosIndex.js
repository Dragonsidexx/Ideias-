const input = document.querySelector('input[type="text"]');
const resultados = document.querySelectorAll('.item-resultado');

input.addEventListener('input', () => {
    const pesquisa = input.value.toLowerCase();
    resultados.forEach(resultado => {
        const titulo = resultado.querySelector('h2').textContent.toLowerCase();
        
        // Verifica se o termo de pesquisa é exatamente "nossas despesas"
        if (pesquisa === 'nossas despesas') {
            resultado.style.display = 'none'; // Oculta todos os resultados
        } else {
            // Verifica se o elemento não tem a classe "despesa" e se o título contém o termo de pesquisa
            if (!resultado.classList.contains('Despesa')) {
                resultado.style.display = titulo.includes(pesquisa) ? 'block' : 'none';
            } else {
                resultado.style.display = 'none'; // Oculta sempre a seção de despesas (caso precise)
            }
        }
    });
});