// eslint-disable-next-line no-unused-vars
'use strict';

const orderForm = document.querySelector('.order-card__form');

orderForm.onsubmit = function(event) {
  event.preventDefault();

  document.querySelector('input[name=name]').value = '';
  document.querySelector('input[name=tel]').value = '';
};
