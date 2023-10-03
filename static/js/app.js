const inputElement = document.getElementById("title");
const createBtn = document.getElementById("create");
const listElement = document.getElementById("list");

let AvailableIndex = 0;

function getNoteTemplate(value, index) {
  return `
  <li 
    id="ul+${index}"
  class="list-group-item d-flex justify-content-between align-items-center">
  <span>${value}</span>
  <span>
    <button 
      onclick="handleClose(${index})"
      class="btn btn-small btn-danger" 
    >
      &times;ты пидор &times;
    </button>
  </span>
</li>`
}
// function render() {
//   for(let i = 0; i < notes.length; i++) {
//     listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i]))
//   }
// }
// render()
function handleClose(index){
  const ul = document.getElementById("ul+"+ index);
  listElement.removeChild(ul);
}
createBtn.addEventListener('click', function() {
  if(inputElement.value.length === 0) {
  return;
  }
  listElement.insertAdjacentHTML(
    'beforeend', getNoteTemplate(inputElement.value, AvailableIndex))
    ++AvailableIndex;
    inputElement.value = ''
  }
)
// listElement.onclick = function (event) {

//   if(event.target.dataset.index) {
//     const index = Number(event.target.dataset.index)
//     const type = event.target.dataset.type

//     if (type === 'remove') {
      
//     }
//   }
// }

