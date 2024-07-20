
document.addEventListener("DOMContentLoaded", function() {
    const accordionHeader = document.querySelector('.accordion-header');
    const accordionContent = document.querySelector('.accordion-content');

    accordionHeader.addEventListener('click', function() {
        accordionHeader.classList.toggle('active');
        accordionContent.classList.toggle('open');

        if (accordionContent.classList.contains('open')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = '0';
        }
    });
});
