const accordionBtn = document.querySelectorAll('.accordion');

const consoled = function() {
    console.log('accept');
}

const accordionOpen = function() {
    this.closest('.accordion-container').classList.toggle('accordion-hide');
}


accordionBtn.forEach((e) => {
    e.addEventListener("click", accordionOpen)
})