// ================= TEMA ESCURO =================
const btnTema = document.getElementById('btnTema');

// carregar tema salvo
if (localStorage.getItem('tema') === 'dark') {
  document.body.classList.add('dark');
  btnTema.textContent = '☀️ Light Mode';
}

btnTema.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  btnTema.textContent = dark ? '☀️ Light Mode' : '🌙 Dark Mode';
  localStorage.setItem('tema', dark ? 'dark' : 'light');
});

// ================= IDIOMA =================
const btnIdioma = document.getElementById('btnIdioma');

window.addEventListener('DOMContentLoaded', () => {
  const lang = btnIdioma.textContent === 'FR' ? 'en' : 'fr';
  document.querySelectorAll('.lang').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
});

btnIdioma.addEventListener('click', () => {
  const lang = btnIdioma.textContent === 'FR' ? 'fr' : 'en';
  document.querySelectorAll('.lang').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
  });
  btnIdioma.textContent = lang === 'fr' ? 'EN' : 'FR';
});

// ================= GALERIA MODAL =================
const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

// Criar modal dinamicamente
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
  <span class="close">&times;</span>
  <span class="nav prev">&#10094;</span>
  <img src="" alt="">
  <span class="nav next">&#10095;</span>
  <div class="caption"></div>
`;
document.body.appendChild(modal);

const modalImg = modal.querySelector('img');
const modalCaption = modal.querySelector('.caption');
const closeBtn = modal.querySelector('.close');
const prevBtn = modal.querySelector('.prev');
const nextBtn = modal.querySelector('.next');

const openModal = (index) => {
  currentIndex = index;
  modal.classList.add('active');
  updateModal();
};

const updateModal = () => {
  const img = galleryItems[currentIndex];
  modalImg.src = img.src.replace('100/100', '800/600');
  modalCaption.textContent = img.alt;
};

const closeModal = () => { modal.classList.remove('active'); };

galleryItems.forEach((item, index) => {
  item.addEventListener('click', () => openModal(index));
});

closeBtn.addEventListener('click', closeModal);
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  updateModal();
});
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  updateModal();
});

// Fechar modal com ESC
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeModal();
});

// Fechar modal clicando fora da imagem
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});
