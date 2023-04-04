window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.nav-menu__list-item'),
    hamburger = document.querySelector('.nav_toggle');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('nav_toggle_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('nav_toggle_active');
            menu.classList.toggle('menu_active');
        })
    })

    let cols = document.querySelectorAll('.collapsible')


    cols.forEach(coll => {
        coll.addEventListener("click", function() {
            cols.forEach(item => {
                if (item !== coll) {
                    item.classList.remove('active')
                    let content = item.nextElementSibling
                    content.style.display = 'none'
                }
            })

            this.classList.toggle("active");
            let content = this.nextElementSibling;

            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    })

})