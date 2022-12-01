// select modal-btn,modal-overlay,close-btn
// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay
const modal = document.querySelector('.modal-btn');
const overyle = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');
modal.addEventListener('click', () => {
    overyle.classList.toggle('open-modal');
});
closeBtn.addEventListener('click', () => {
    overyle.classList.remove('open-modal');
});
