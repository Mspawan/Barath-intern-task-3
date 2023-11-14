document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        item.addEventListener('click', function() {
            if (!item.classList.contains('active')) {
                accordionItems.forEach(accItem => {
                    accItem.classList.remove('active');
                });
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    });
});