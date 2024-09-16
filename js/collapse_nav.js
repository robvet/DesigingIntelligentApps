document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".md-nav__item--nested");

    navItems.forEach(item => {
        item.addEventListener("click", function () {
            // Collapse all open sections
            navItems.forEach(nav => nav.classList.remove("md-nav__item--active"));

            // Expand the clicked section
            item.classList.add("md-nav__item--active");
        });
    });
});