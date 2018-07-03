/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 4 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она использовала не createElement, а возвращала 
    строку с тегами, которую потом можно будет поставить в документ 
    используя innerHTML или insertAdjacentHTML. Грубо говоря - шаблон поста.
  
  2. Модифицируйте createPostCard(post) так, чтобы она принимала 
    объект post с данными для заполнения полей в карточке. Используя 
    createPostCard создать карточки для 3-х разных постов по данному 
    массиву объектов и повесить их в документ.
  
  3. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    строку с разметкой всех постов.
  
  4. Повесьте все посты в какой-то уже существующий DOM-узел.
  
  🔔 Подсказка: для того чтобы создать список .actions, необходимо в интерполяции 
    использовать reduce, вернув строку с разметкой. Например:
    
    const string = `<ul>${[1, 2, 3].reduce((acc, x) => acc + `<li>${x}</li>`, '')}</ul>`;
    console.log(string); // '<ul><li>1</li><li>2</li><li>3</li></ul>'
    
    Таким образом на место вызова reduce верентся строка с тегами, которую можно 
    поставить через innerHTML или insertAdjacentHTML.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 6,
      dislikes: 2,
      fav: 3
    }
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 124,
      dislikes: 8,
      fav: 36
    }
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 800,
      dislikes: 36,
      fav: 147
    }
  }
];
===========================
Вы можете использовать следующие свойства для навигации между узлами.
Синтаксис                Описание
elem.parentNode          Выберет родителя elem
elem.childNodes          Псевдо-массив хранит все дочерние элементы,включая  текстовые.

elem.children            Псевдо-массив хранит только дочерние узлы-элементы, то есть соответствующие тегам.

elem.firstChild          Выберет первый дочерний элемент внутри elem, включая текстовые узлы.

elem.firstElementChild   Выберет первый дочерний узел-элемент внутри elem.
elem.lastChild           Выберет последний дочерний элемент внутри elem, включая текстовые узлы.

elem.lastElementChild   Выберет последний дочерний узел-элемент внутри elem.
elem.previousSibling    Выберет элемент "слева" от elem (его предыдущего соседа)

elem.previousElementSibling     Выберет узел-элемент "слева" от elem (его предыдущего соседа)

elem.nextSibling         Выберет элемент "справа" от elem (его следующего соседа)

elem.nextElementSibling  Выберет узел-элемент "справа" от elem (его предыдущего соседа).

==================================
Объект, содержит методы для работы с классами элемента.

Метод Описание
elem.classList.contains(cls)          возвращает true/false, в зависимости от того, есть ли у элемента класс cls

elem.classList.add(cls)       добавляет класс cls в список классов элемента
elem.classList.remove(cls)  удаляет класс cls из списка классов элемента
elem.classList.toggle(cls)  если класса cls нет, добавляет его, если есть - удаляет.
==================================

Синтаксис Описание
elem.hasAttribute(name) Проверяет наличие аттрибута, возвращает true/false
elem.getAttribute(name) получает значение атрибута и возвращает его
elem.setAttribute(name, value)  устанавливает атрибут
elem.removeAttribute(name)  удаляет атрибут
elem.attributes свойство, возвращает коллекцию всех атрибутов элемента
=================================
//Добавляет elem в конец дочерних элементов parentElem
parentElem.appendChild(elem)

/*
  Добавляет elem в коллекцию детей parentElem,
  перед элементом nextSibling.

  Для вставки элемента в начало достаточно вторым
  аргументом insertBefore указать null, тогда
  insertBefore сработает как appendChild.
*/
parentElem.insertBefore(elem, nextSibling)
=================================
node.append(nodes)  добавляет nodes в конец node
node.prepend(nodes) добавляет nodes в начало node
node.after(nodes) добавляет nodes после узла node
node.before(nodes)  добавляет nodes перед узлом node
node.replaceWith(nodes) добавляет nodes вместо node
================================
Иногда нужно удалить узел. Для этого есть метод elem.remove(), он удаляет elem из document.
================================
Метод insertAdjacentHTML парсит указанную строку как HTML и добавляет результирующие узлы в указанное место DOM-дерева. Он не делает повторный рендеринг для существующих элементов внутри элемента-родителя на котором используется. Это позволяет избежать дополнительного этапа сериализации, делая его намного быстрее, чем непосредственная манипуляция innerHTML.

element.insertAdjacentHTML(position, text);
position - позиция относительно элемента и должна быть одной из следующих значений:

Значение  Описание
'beforebegin' перед element
'afterbegin'  внутрь element, в самое начало контента
'beforeend' внутрь element, в самый конец контента
'afterend'  после element
=================================
Вызов elem.cloneNode(true) создаст «глубокую» копию элемента – вместе с атрибутами, включая подэлементы. Если же вызвать с аргументом false, то копия будет сделана без дочерних элементов.