
const button = document.querySelector('#button1');

const header = document.querySelector('#colorChangingHeader');

button.addEventListener("click", handleHeaderButton);

function handleHeaderButton(event) {
    header.classList.toggle('newHeader');

}