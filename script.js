const btn = document.querySelector('#contactBtn');
const title = document.querySelector('h1');

btn.addEventListener('click', () => {title.textContent = '정민상 그는 2001년생이고, 서울에서 태어났지만 생의 대부분은 경기도 안산에서 살았다.';});
const modal = document.querySelector('#modal');
document.querySelector('#contactBtn').addEventListener('click', () => {modal.classList.add('is-open');});
document.querySelector('#closeBtn').addEventListener('click', () => {modal.classList.remove('is-open');});

/* PWA 서비스 워커 등록 */
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch((err) => {
      console.error('Service Worker registration failed:', err);
    });
  });
}
