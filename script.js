// Dark Mode
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Translations
const translations = {
  en: {
    "nav.about": "About Me",
    "nav.services": "Services",
    "nav.gallery": "Gallery",
    "nav.contact": "Contact",
    "hero.title": "Relaxation & Therapeutic Massage in the UK",
    "hero.text": "Experience professional massage services focused on your well-being, balance and renewal.",
    "about.title": "About Me",
    "about.text": "I am a certified massage therapist based in the UK, offering relaxation, therapeutic and wellness massage services.",
    "services.title": "Services",
    "services.item1": "Relaxation Massage",
    "services.item2": "Therapeutic Massage",
    "services.item3": "Aromatherapy Massage",
    "services.item4": "Wellness Massage",
    "gallery.title": "Gallery",
    "contact.title": "Contact"
  },
  pt: {
    "nav.about": "Sobre Mim",
    "nav.services": "Serviços",
    "nav.gallery": "Galeria",
    "nav.contact": "Contato",
    "hero.title": "Massagem Relaxante e Terapêutica no Reino Unido",
    "hero.text": "Experimente serviços profissionais de massagem focados no seu bem-estar, equilíbrio e renovação.",
    "about.title": "Sobre Mim",
    "about.text": "Sou massoterapeuta certificado no Reino Unido, oferecendo serviços de massagem relaxante, terapêutica e de bem-estar.",
    "services.title": "Serviços",
    "services.item1": "Massagem Relaxante",
    "services.item2": "Massagem Terapêutica",
    "services.item3": "Massagem com Aromaterapia",
    "services.item4": "Massagem de Bem-Estar",
    "gallery.title": "Galeria",
    "contact.title": "Contato"
  },
  fr: {
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.gallery": "Galerie",
    "nav.contact": "Contact",
    "hero.title": "Massage Relaxant & Thérapeutique au Royaume-Uni",
    "hero.text": "Découvrez des services de massage professionnels axés sur votre bien-être, équilibre et renouveau.",
    "about.title": "À propos",
    "about.text": "Je suis massothérapeute certifié au Royaume-Uni, offrant des massages relaxants, thérapeutiques et de bien-être.",
    "services.title": "Services",
    "services.item1": "Massage Relaxant",
    "services.item2": "Massage Thérapeutique",
    "services.item3": "Massage Aromathérapie",
    "services.item4": "Massage Bien-Être",
    "gallery.title": "Galerie",
    "contact.title": "Contact"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
}

// Gallery Modal
const modal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");
const galleryItems = document.querySelectorAll(".gallery-item");
let currentIndex = 0;

galleryItems.forEach((img, index) => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
    currentIndex = index;
  });
});

document.querySelector(".close").onclick = () => { modal.style.display = "none"; };
document.getElementById("next").onclick = () => showImage(currentIndex + 1);
document.getElementById("prev").onclick = () => showImage(currentIndex - 1);

function showImage(index) {
  if (index >= galleryItems.length) index = 0;
  if (index < 0) index = galleryItems.length - 1;
  modalImg.src = galleryItems[index].src;
  currentIndex = index;
}
