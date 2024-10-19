function mostrarImagens(tipo) {
    // Esconde todas as divisões de imagens
    document.getElementById('imagens-hamburger').classList.remove('mostrar');
    document.getElementById('imagens-refrigerante').classList.remove('mostrar');
    document.getElementById('imagens-batatas').classList.remove('mostrar');

    // Mostra a divisão de imagens correspondente ao tipo clicado
    if (tipo === 'hamburger') {
        document.getElementById('imagens-hamburger').classList.add('mostrar');
    } else if (tipo === 'refrigerante') {
        document.getElementById('imagens-refrigerante').classList.add('mostrar');
    } else if (tipo === 'batatas') {
        document.getElementById('imagens-batatas').classList.add('mostrar');
    }
}
