'use strict';

const food = {
  'Meat': {
    'Pork': {},
    'Beef': {},
  },

  'Fruit': {
    'Red': {
      'Cherry': {},
      'Strawberry': {},
    },
    'Yellow': {
      'Banana': {},
      'Pineapple': {},
    },

  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  const list = document.createElement('ul');

  element.appendChild(list);

  for (const [key, value] of Object.entries(data)) {
    const li = document.createElement('li');

    list.appendChild(li);
    li.textContent = key;

    if (Object.keys(value).length) {
      createTree(li, value);
    }
  }
}

createTree(tree, food);

