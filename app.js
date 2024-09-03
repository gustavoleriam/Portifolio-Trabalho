
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav a');
    const secoes = document.querySelectorAll('main div');

    function ativarSecao(link) {
        secoes.forEach(secao => secao.classList.remove('active'));

        const classeAlvo = link.className;
        const secaoAlvo = document.querySelector(`main div.${classeAlvo}`);
        if (secaoAlvo) {
            secaoAlvo.classList.add('active');
        }
    }

    links.forEach(link => {
        link.addEventListener('click', (evento) => {
            evento.preventDefault();
            ativarSecao(link);
        });
    });

    ativarSecao(links[0]);
});
