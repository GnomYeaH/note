const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

function getNoteTemplate(index) {
  return `
  <li
  class="list-group-item d-flex justify-content-between align-items-center">
  <span>${inputElement.value}</span>
  <span>
    <span class="btn btn-small btn-danger" data-type="remove" data-index="${index}">&times;</span>
  </span>
</li>`
}
// function render() {
//   for(let i = 0; i < notes.length; i++) {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//   }
// }
// render()

createBtn.addEventListener('click', function() {
  if(inputElement.value.length === 0) {
  return;
  }
  listElement.insertAdjacentHTML(
    'beforeend', getNoteTemplate(inputElement.value))
    inputElement.value = ''
  }
)
listElement.onclick = function (event) {
  if(event.target.dataset.index) {
    const index = Number(event.target.dataset.index)
    const type = event.target.dataset.type

    if (type === 'remove') {
      console.log('remove', index)
    }
  }
}

