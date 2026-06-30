/* =================================================================
   THE RK GROUP — site interactions
   ================================================================= */

/* ---- EDIT THIS: your WhatsApp business number, country code + number, no + or spaces ---- */
const WHATSAPP_NUMBER = "919999999999"; // e.g. 91 98765 43210 -> "919876543210"

/* ---------------- starfield canvas ---------------- */
(function starfield(){
  const canvas = document.getElementById('starfield');
  const ctx = canvas.getContext('2d');
  let w, h, stars = [];
  const STAR_COUNT = 220;

  function resize(){
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  function makeStars(){
    stars = Array.from({length: STAR_COUNT}, () => ({
      x: Math.random()*w,
      y: Math.random()*h,
      r: Math.random()*1.3 + 0.2,
      speed: Math.random()*0.15 + 0.02,
      tw: Math.random()*Math.PI*2,
      twSpeed: Math.random()*0.02 + 0.005
    }));
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    ctx.fillStyle = '#07070a';
    ctx.fillRect(0,0,w,h);
    for(const s of stars){
      s.tw += s.twSpeed;
      const alpha = 0.35 + Math.sin(s.tw)*0.35 + 0.3;
      ctx.beginPath();
      ctx.fillStyle = `rgba(243,223,166,${Math.min(Math.max(alpha,0.1),1)})`;
      ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
      ctx.fill();
      s.y += s.speed;
      if(s.y > h){ s.y = 0; s.x = Math.random()*w; }
    }
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize', () => { resize(); makeStars(); });
  resize(); makeStars(); draw();
})();

/* ---------------- nav scroll state ---------------- */
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 30);
});

/* ---------------- scroll reveal for divisions ---------------- */
const revealEls = document.querySelectorAll('.division');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
revealEls.forEach(el => io.observe(el));

/* ---------------- smooth nav links + close on click ---------------- */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href');
    if(id.length > 1){
      const target = document.querySelector(id);
      if(target){
        e.preventDefault();
        target.scrollIntoView({ behavior:'smooth', block:'start' });
      }
    }
  });
});

/* ---------------- WhatsApp deep links ---------------- */
function waLink(message){
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
document.querySelectorAll('[data-wa-default]').forEach(btn => {
  btn.href = waLink("Hello RK Group, I'd like to know more about your services.");
});

/* ---------------- contact form -> builds a WhatsApp message ---------------- */
const form = document.getElementById('enquiry-form');
const successBox = document.getElementById('form-success');

if(form){
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const division = form.division.value;
    const message = form.message.value.trim();

    if(!name || !phone || !division){
      form.reportValidity();
      return;
    }

    const text =
`New Enquiry — The RK Group
Name: ${name}
Phone: ${phone}
Email: ${email || '-'}
Interested In: ${division}
Message: ${message || '-'}`;

    form.style.display = 'none';
    successBox.classList.add('show');

    window.open(waLink(text), '_blank');
  });
}

function resetForm(){
  if(form){
    form.reset();
    form.style.display = 'block';
  }
  if(successBox) successBox.classList.remove('show');
}
window.resetForm = resetForm;
