const tombol = document.getElementById('tombol');
const pesan = document.getElementById('pesan');

// Pindahkan tombol ke posisi acak di dalam layar
function pindah() {
  const maxX = window.innerWidth - tombol.offsetWidth - 10;
  const maxY = window.innerHeight - tombol.offsetHeight - 10;
  tombol.style.left = Math.max(10, Math.random() * maxX) + 'px';
  tombol.style.top = Math.max(120, Math.random() * maxY) + 'px';
}

// Posisi awal: di bawah teks, di tengah
window.addEventListener('load', () => {
  tombol.style.left = (window.innerWidth - tombol.offsetWidth) / 2 + 'px';
  tombol.style.top = '110px';
});

// Kabur saat kursor masuk, atau saat disentuh di layar sentuh
tombol.addEventListener('mouseenter', pindah);
tombol.addEventListener('touchstart', (e) => {
  e.preventDefault();
  pindah();
}, { passive: false });

// Jaga-jaga kalau ada yang berhasil mengklik
tombol.addEventListener('click', () => {
  pesan.textContent = 'Wah, kamu berhasil! 🎉';
});

window.addEventListener('resize', pindah);
