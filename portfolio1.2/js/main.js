'use strict'
{
  const open = document.getElementById('open');
  const translate = document.getElementById('translate');
  const overlay = document.getElementById('overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    translate.classList.add('translateY');
    overlay.classList.add('show');
  });

  close.addEventListener('click', () => {
    translate.classList.remove('translateY');
    overlay.classList.remove('show');
  });
}