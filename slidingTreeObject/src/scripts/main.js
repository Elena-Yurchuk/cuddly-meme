'use strict';

const list = document.getElementById('list');

for (const li of list.querySelectorAll('li')) {
  const span = document.createElement('span');
 
  span.classList.add('show'); 
  li.prepend(span); 
  span.append(span.nextSibling); 
}

list.onclick = () => {
  if (event.target.tagName !== 'SPAN') {
    return;
  }

  const childrenList = event.target.parentNode.querySelector('ul');

  if (!childrenList) {
    return;
  }
  childrenList.hidden = !childrenList.hidden;

  if (childrenList.hidden) {
    event.target.classList.add('hide');
    event.target.classList.remove('show');
  } else {
    event.target.classList.add('show');
    event.target.classList.remove('hide');
  }
};    

