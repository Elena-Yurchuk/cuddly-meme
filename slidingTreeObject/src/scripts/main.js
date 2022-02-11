'use strict';

const list = document.getElementById('list');

for (const li of list.querySelectorAll('li')) {
  const span = document.createElement('span');
 
  span.classList.add('show'); 
  li.prepend(span); 
  span.append(span.nextSibling); 
}

list.addEventListener('click', (ev) => {
  if (ev.target.tagName !== 'SPAN') {
    return;
  }

  const childrenList = ev.target.parentNode.querySelector('ul');

  if (!childrenList) {
    return;
  }
  childrenList.hidden = !childrenList.hidden;

  if (childrenList.hidden) {
    ev.target.classList.add('hide');
    ev.target.classList.remove('show');
  } else {
    ev.target.classList.add('show');
    ev.target.classList.remove('hide');
  }
});


