var menu = new Menu({
  title: "Сладости",
  // передаём также шаблоны
  template: _.template(document.getElementById('menu-template').innerHTML),
  listTemplate: _.template(document.getElementById('menu-list-template').innerHTML),
  items: [
    "Торт",
    "Пончик",
    "Пирожное",
    "Шоколадка",
    "Мороженое"
  ]
});

document.body.appendChild(menu.getElem());