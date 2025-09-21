<!-- FILE: script.js -->
// Theme toggle
const btnTema = document.getElementById('btnTema');
btnTema.addEventListener('click', ()=>{
document.body.classList.toggle('dark');
btnTema.textContent = document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark Mode';
});


// Language toggle (EN <-> FR)
const btnIdioma = document.getElementById('btnIdioma');
let lang = 'en'; // default
function applyLang(l){
document.querySelectorAll('.lang').forEach(el=>{
const txt = el.getAttribute('data-'+l);
if(txt){ el.textContent = txt; }
});
btnIdioma.textContent = l === 'fr' ? 'EN' : 'FR';
}
btnIdioma.addEventListener('click', ()=>{
lang = lang === 'en' ? 'fr' : 'en'; applyLang(lang);
});
applyLang(lang);


// Accessibility: keyboard focus for interactive elements
document.querySelectorAll('button,a').forEach(el=>el.setAttribute('tabindex','0'));
