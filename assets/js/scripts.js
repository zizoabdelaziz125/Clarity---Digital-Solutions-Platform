document.querySelectorAll('.dropdown').forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    const icon = toggle.querySelector('.dropdown-icon');

    dropdown.addEventListener('show.bs.dropdown', () => {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
    });

    dropdown.addEventListener('hide.bs.dropdown', () => {
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
    });
});

var scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbarSupportedContent',
    offset: 80
})
