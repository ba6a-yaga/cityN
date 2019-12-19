function Dropdown(obj) {
    var d = document.getElementById(obj);
    var el = d.getElementsByClassName('card__list__item__content');
    var g = el[0].getElementsByClassName('card__list__item__block');
    if (d.classList.contains('active')) {
        d.classList.remove('active');
        el[0].setAttribute('style', 'height:0');
    } else {
        d.classList.add('active');
        el[0].setAttribute('style', 'height:' + (g[0].offsetHeight + 1) + 'px'); // +1 пиксель для границы обводки списков обьектов категории(макет 22 Перечни)
    }
}

function txtInput(label, input) {
    var de = document.getElementById(label);
    var el = document.getElementById(input);
    if (el !== null && el.value === "") {
        de.classList.remove("full");
    } else {
        de.classList.add("full");
    }
}
