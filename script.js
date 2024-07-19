document.addEventListener('DOMContentLoaded', function() {
    const burgerIcon = document.getElementById('burgerIcon');

    burgerIcon.addEventListener('click', function() {
        if (window.location.pathname.endsWith("menu.html")) {
            window.location.href = "index.html";
        } else {
            burgerIcon.classList.toggle('change');
            setTimeout(() => {
                window.location.href = "menu.html";
            }, 300);
        }
    });
});
