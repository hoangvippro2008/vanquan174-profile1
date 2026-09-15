'use strict';

const track = document.getElementById('photo-track');
const photos = [...track.querySelectorAll('.photo')];
const previous = document.getElementById('previous-photo');
const next = document.getElementById('next-photo');
const count = document.getElementById('current-photo');
const carousel = document.querySelector('.carousel');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let active = 0;
let scheduled = false;
let drag = null;

function position(index) {
  return photos[index].offsetLeft - photos[0].offsetLeft;
}

function update() {
  let distance = Infinity;
  photos.forEach((photo, index) => {
    const delta = Math.abs(position(index) - track.scrollLeft);
    if (delta < distance) {
      distance = delta;
      active = index;
    }
  });
  count.textContent = String(active + 1).padStart(2, '0');
  previous.disabled = active === 0;
  next.disabled = active === photos.length - 1;
  scheduled = false;
}

function move(index) {
  const target = Math.max(0, Math.min(photos.length - 1, index));
  track.scrollTo({left: position(target), behavior: reducedMotion.matches ? 'instant' : 'smooth'});
}

previous.addEventListener('click', () => move(active - 1));
next.addEventListener('click', () => move(active + 1));
track.addEventListener('scroll', () => {
  if (!scheduled) {
    scheduled = true;
    requestAnimationFrame(update);
  }
}, {passive: true});

carousel.addEventListener('keydown', event => {
  if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
  event.preventDefault();
  if (event.key === 'ArrowLeft') move(active - 1);
  if (event.key === 'ArrowRight') move(active + 1);
  if (event.key === 'Home') move(0);
  if (event.key === 'End') move(photos.length - 1);
});

track.addEventListener('pointerdown', event => {
  if (event.pointerType !== 'mouse' || event.button !== 0) return;
  drag = {x: event.clientX, scroll: track.scrollLeft, id: event.pointerId};
  track.setPointerCapture(event.pointerId);
  track.classList.add('dragging');
});
track.addEventListener('pointermove', event => {
  if (!drag) return;
  track.scrollLeft = drag.scroll - (event.clientX - drag.x);
});
function finishDrag() {
  if (!drag) return;
  const id = drag.id;
  drag = null;
  track.classList.remove('dragging');
  if (track.hasPointerCapture(id)) track.releasePointerCapture(id);
  update();
  move(active);
}
track.addEventListener('pointerup', finishDrag);
track.addEventListener('pointercancel', finishDrag);
track.addEventListener('lostpointercapture', finishDrag);
new ResizeObserver(() => {
  if (drag) finishDrag();
  track.scrollTo({left: position(active), behavior: 'instant'});
  update();
}).observe(track);
update();
