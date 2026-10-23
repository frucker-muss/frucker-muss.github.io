/* Ampliação de imagem documental em dois níveis.
   1º toque na figura: imagem inteira ajustada à tela, com a legenda.
   2º toque na imagem: tamanho real, com rolagem para examinar detalhes.
   Toque de novo volta ao ajuste; "Fechar" ou Esc fecha. */
(function () {
  var botoes = document.querySelectorAll('.figura-ampliar');
  if (!botoes.length) return;

  var caixa = document.createElement('div');
  caixa.className = 'ampliacao';
  caixa.hidden = true;
  caixa.setAttribute('role', 'dialog');
  caixa.setAttribute('aria-modal', 'true');
  caixa.setAttribute('aria-label', 'Imagem ampliada');
  caixa.innerHTML =
    '<div class="ampliacao-barra">' +
      '<button type="button" class="ampliacao-nivel">Tamanho real</button>' +
      '<button type="button" class="ampliacao-fechar">Fechar</button>' +
    '</div>' +
    '<div class="ampliacao-palco"><img alt=""></div>' +
    '<div class="ampliacao-legenda"></div>';
  document.body.appendChild(caixa);

  var img = caixa.querySelector('img');
  var legenda = caixa.querySelector('.ampliacao-legenda');
  var nivel = caixa.querySelector('.ampliacao-nivel');
  var fechar = caixa.querySelector('.ampliacao-fechar');
  var origem = null;

  function alternar() {
    var real = caixa.classList.toggle('is-real');
    nivel.textContent = real ? 'Ajustar à tela' : 'Tamanho real';
  }

  function abrir(botao) {
    origem = botao;
    var miniatura = botao.querySelector('img');
    var cap = botao.parentNode.querySelector('figcaption');
    img.src = botao.getAttribute('data-grande');
    img.alt = miniatura ? miniatura.alt : '';
    legenda.innerHTML = cap ? cap.innerHTML : '';
    caixa.classList.remove('is-real');
    nivel.textContent = 'Tamanho real';
    caixa.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    fechar.focus();
  }

  function fecharCaixa() {
    caixa.hidden = true;
    document.documentElement.style.overflow = '';
    img.removeAttribute('src');
    if (origem) origem.focus();
  }

  for (var i = 0; i < botoes.length; i++) {
    botoes[i].addEventListener('click', function () { abrir(this); });
  }
  img.addEventListener('click', alternar);
  nivel.addEventListener('click', alternar);
  fechar.addEventListener('click', fecharCaixa);
  document.addEventListener('keydown', function (e) {
    if (caixa.hidden) return;
    if (e.key === 'Escape') fecharCaixa();
    if (e.key === 'Tab') { // mantém o foco dentro da caixa
      var alvo = e.shiftKey ? nivel : fechar;
      if (document.activeElement === alvo) { e.preventDefault(); (e.shiftKey ? fechar : nivel).focus(); }
    }
  });
})();
