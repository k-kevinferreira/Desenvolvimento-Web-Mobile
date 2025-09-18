// Seleciona elementos
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const fechar = document.querySelector('.lightbox .fechar');
const imagens = document.querySelectorAll('.galeria-img');

// Quando clicar em uma imagem
imagens.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'flex';
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
  });
});

// Fecha lightbox ao clicar no X
fechar.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

// Fecha lightbox ao clicar fora da imagem
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});

// Quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function () {
  const imagens = document.querySelectorAll('.galeria-img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const fechar = document.querySelector('.fechar');

  // Abrir imagem no lightbox ao clicar
  imagens.forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightbox.style.display = 'flex';
    });
  });

  // Fechar lightbox ao clicar no botão de fechar
  fechar.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxImg.src = '';
  });

  // Fechar lightbox ao clicar fora da imagem
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    }
  });
});
