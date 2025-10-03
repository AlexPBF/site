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

//About Me
const images = [
  "img/O09A7268_page-0001.jpg",
  "img/O09A7277_page-0001.jpg",
  "img/O09A7280_page-0001.jpg",
  "img/O09A7287_page-0001.jpg",
  "img/O09A7292_page-0001.jpg",
  "img/O09A7271_page-0001.jpg",
  "img/O09A7268_page-0001.jpg",
  "img/7d9ae849-d0ce-4007-9eab-eb5058c87f73.JPG",
  "img/760a4d8a-483c-4bc3-aba6-dfe8ae7d6559.JPG",
  "img/3313eeec-a737-4441-b47a-eabc19f1aad6.JPG",
  "img/358633de-a1ae-4e60-aaec-52e254621ed6.JPG",
  "img/e2a047da-7d31-4535-83e9-56e405fd7795.JPG",
  "img/SAM00014.jpg"
];

// Função de hash simples baseada em string (alt)
function hashString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

// Função que aplica a imagem aleatória
function setRandomImage(imgElement, deterministic = true) {
  let index;
  if (deterministic && imgElement.alt !== "RANDOM") {
    // usa alt como “semente” para determinístico
    const seed = hashString(imgElement.alt);
    index = seed % images.length;
  } else {
    // aleatório puro
    index = Math.floor(Math.random() * images.length);
  }
  imgElement.src = images[index];
}

// Aplica para todas imagens com id começando com "randomImg"
document.querySelectorAll('img[id^="randomImg"]').forEach(img => setRandomImage(img));


document.getElementById("whatsappBtn1").addEventListener("click", function(e) {
    // opcional: abrir em nova aba manualmente
    window.open(this.href, "_blank"); 
    // redireciona na aba atual
    window.location.href = "https://professionalmassage.uk/thankyou";
    // impede comportamento padrão do link
    e.preventDefault();
});

document.getElementById("whatsappBtn2").addEventListener("click", function(e) {
    // opcional: abrir em nova aba manualmente
    window.open(this.href, "_blank"); 
    // redireciona na aba atual
    window.location.href = "https://professionalmassage.uk/thankyou";
    // impede comportamento padrão do link
    e.preventDefault();
});


document.getElementById("mapOverlay").addEventListener("click", function() {
    // Envia evento para GTM
    dataLayer.push({
      event: "interesse_mapa",
      tipo: "mapa"
    });

    // Opcional: abre o Google Maps real em nova aba
    // window.open("https://www.google.com/maps?q=Professional+Massage+UK", "_blank");
});
