'use strict';

const calendar = document.querySelector('#calendar');

const calendarTable = (year, month, element) =>{
  const mon = month - 1;
  const data = new Date(year, mon);
  let table = '<table><tr><th>ПН</th><th>ВТ</th><th>СР</th><th>ЧТ</th><th>ПТ</th><th>СБ</th><th>ВС</th></tr><tr>';

  for (let i = 0; i < getDay(data); i++) {
    table += '<td></td>';
  }

  while(data.getMonth() === mon) {
    table += '<td>' + data.getDate() + '</td>';

    if (getDay(data) % 7 === 6) {
      table += '<tr></tr>';
    }

    data.setDate(data.getDate() + 1);
  }

  if (getDay(data) != 0) {
    for (let i = getDay(data); i < 7; i++) {
      table += '<td></td>';
    }
  }

  table += '</tr></table>';

  element.innerHTML = table;
};

const getDay = (date) => {
  let day = date.getDay();

  if (day === 0) {
    day = 7;
  }

  return day - 1;
};

calendarTable(2022, 2, calendar);
