// Initialize carousel
const myCarouselEl = document.querySelector('#myCarousel');
const carousel = new bootstrap.Carousel(myCarouselEl, {
  interval: 5000,   // slide every 5s
  ride: 'carousel',  // start automatically
  wrap: true
});

// Optional: jump to slide when indicator clicked
myCarouselEl.querySelectorAll('.carousel-indicators button').forEach((btn, index) => {
  btn.addEventListener('click', () => {
    carousel.to(index);
  });
});

// Optional: programmatic prev/next (already handled by buttons)
myCarouselEl.querySelector('.carousel-control-prev').addEventListener('click', () => carousel.prev());
myCarouselEl.querySelector('.carousel-control-next').addEventListener('click', () => carousel.next());

const modal = document.getElementById('dynamicModal');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalText');
const modalImage = document.getElementById('modalImage');
const claimBtn = document.getElementById('claimBtn');
const closeBtn = document.getElementById('closeBtn');

document.querySelectorAll('button[data-bs-target="#dynamicModal"]').forEach(button => {
  button.addEventListener('click', () => {
    // Update modal content
    modalTitle.textContent = button.dataset.title;
    modalText.textContent = button.dataset.content;
    modalImage.src = button.dataset.img;

    // Show either Claim or Close
    if (button.dataset.showClose === "true") {
      claimBtn.style.display = 'none';
      closeBtn.style.display = 'inline-block';
    } else {
      claimBtn.style.display = 'inline-block';
      closeBtn.style.display = 'none';
    }
  });
});

// Reset modal buttons every time modal closes
modal.addEventListener('hidden.bs.modal', () => {
  claimBtn.style.display = 'inline-block';
  closeBtn.style.display = 'none';
});
