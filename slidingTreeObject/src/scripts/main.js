'use strict';

const tree = document.getElementById('list');

tree.addEventListener('click', (ev) => {
  if (ev.target.tagName !== 'LI') {
    return;
  }

  const childrenContainer = ev.target.querySelector('ul');

  if (!childrenContainer) {
    return;
  }

  childrenContainer.hidden = !childrenContainer.hidden;
});


