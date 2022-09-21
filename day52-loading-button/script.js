const searchBtn = document.querySelector('#search-button');
const searchBtnContent = document.querySelector('#search-button div');

searchBtn.addEventListener('click', toggleBtn);

function toggleBtn() {
    searchBtnContent.classList.toggle('loading');
}