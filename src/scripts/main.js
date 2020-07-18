/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
function onSubmit() {
  event.preventDefault();

  document.querySelector('input[name=name]').value = '';
  document.querySelector('input[name=message]').value = '';
}
