const botao = document.getElementById('mostrarMaisBtn');
const wrapper = document.querySelector('.mods-wrapper');

botao.addEventListener('click', () => {
    wrapper.classList.toggle('expandido');
    botao.querySelector('span').textContent = wrapper.classList.contains('expandido') ? 'Menos' : 'Mais';

});

document.querySelectorAll('.lista-mods li').forEach(function (item) {
    const link = item.querySelector('a');
    const desc = item.querySelector('.descricao-mod');

    // Adiciona o botão dentro da descrição, se ainda não existir
    if (link && desc && !desc.querySelector('.botao-link')) {
        const button = document.createElement('a');
        button.href = link.href;
        button.target = "_blank";
        button.rel = "noopener noreferrer";
        button.className = "botao-link";
        button.textContent = "Ir para página";
        desc.appendChild(button);
    }

    // Evento de clique no li (mas ignorando se o clique for em link ou imagem)
    item.addEventListener('click', function (e) {
        if (e.target.closest('a') || e.target.tagName.toLowerCase() === 'img') return;

        document.querySelectorAll('.lista-mods li').forEach(function (other) {
            if (other !== item) {
                other.classList.remove('expanded');
            }
        });

        item.classList.toggle('expanded');
    });
});

document.getElementById('ip-box').addEventListener('click', function () {
    const ip = document.getElementById('ip-text').textContent;
    navigator.clipboard.writeText(ip).then(() => {
        const msg = document.getElementById('copiado-msg');
        msg.style.display = 'block';
        setTimeout(() => {
            msg.style.display = 'none';
        }, 2000);
    });
});
