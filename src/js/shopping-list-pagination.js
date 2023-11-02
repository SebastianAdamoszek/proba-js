import Notiflix from 'notiflix';
import * as localStorage from './local-storage.js';
import { getBooksApi } from './api.js';
import amazonIcon from '/src/images/amazon-light-mode.svg';
import appleBooksIcon from '/src/images/apple-books.svg';
import { updateBookCount } from './book-count.js';

let booksIdList = localStorage.load('myBooksId') || [];
const cardsList = document.querySelector('.cards-list');
const shoppingEmpty = document.querySelector('.shopping-empty');
shoppingEmpty.style.display = 'none';
const loaderShoppingList = document.querySelector('.loader--shopping-list');
loaderShoppingList.style.display = 'none';

let currentPage = 1;
const booksPerPage = 3;

const nextButton = document.querySelector('.next-page');
const prevButton = document.querySelector('.prev-page');

// Function to update the page buttons
const updatePageButtons = () => {
  if (booksIdList.length <= booksPerPage) {
    nextButton.style.display = 'none';
    prevButton.style.display = 'none';
  } else if (currentPage === 1) {
    nextButton.style.display = 'block';
    prevButton.style.display = 'none';
  } else if (currentPage === Math.ceil(booksIdList.length / booksPerPage)) {
    nextButton.style.display = 'none';
    prevButton.style.display = 'block';
  } else {
    nextButton.style.display = 'block';
    prevButton.style.display = 'block';
  }
};

// Event handler for next page button
nextButton.addEventListener('click', () => {
  if (currentPage < Math.ceil(booksIdList.length / booksPerPage)) {
    currentPage++;
    renderList(booksIdList, currentPage);
  }
});

// Event handler for previous page button
prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    renderList(booksIdList, currentPage);
  }
});

// Function: Creating book-card markup and adding to DOM //
const showMyBook = myBook => {
  const { _id, book_image, title, list_name, description, author, buy_links } = myBook;
  const markup = `<li class="card-item">
        <div class="card-item__box">
          <div class="remove-button">
            <button type="button" class="remove-button__box" data-id="${_id}"></button>
          </div>
          <div class="card-item__img-box">
            <img
              src="${book_image}"
              alt="Book cover"
              class="card-item__img"
            />
          </div>
          <div class="card-item__info">
            <div class="card-item__info-body">
              <h2 class="card-item__title">${title}</h2>
              <h3 class="card-item__category">${list_name}</h3>
              <p class="card-item__description">
              ${description}
              </p>
            </div>
            <div class="card-item__info-footer">
              <div class="card-item__author-box">
                <p class="card-item__author">${author}</p>
              </div>
              <div class="card-item__shops">
                <ul class="shops-list">
                  <li class="shops-list__item">
                    <a
                      href="${buy_links[0].url}"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      class="shops-list__link"
                      ><div class="shops-list__icon-box shops-list__icon-box--amazon">
                        <img
                          src="${amazonIcon}"
                          alt="Amazon logo"
                          class="shops-list__icon-img-amazon"
                        /></div
                    ></a>
                  </li>
                  <li class="shops-list__item">
                    <a
                      href="${buy_links[1].url}"
                      target="_blank"
                      rel="nofollow noopener noreferrer"
                      class="shops-list__link"
                      ><div class="shops-list__icon-box shops-list__icon-box--apple">
                        <img
                          src="${appleBooksIcon}"
                          alt="Apple Books logo"
                          class="shops-list__icon-img-apple"
                        /></div
                    ></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>`;
  cardsList.insertAdjacentHTML('beforeend', markup);
};

// Fetch books by IDs from array and render list //
const renderList = (array, page) => {
  loaderShoppingList.style.display = 'block';
  const startIndex = (page - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const booksToDisplay = array.slice(startIndex, endIndex);

  cardsList.innerHTML = '';

  booksToDisplay.forEach(bookID => {
    getBooksApi(bookID)
      .then(book => {
        loaderShoppingList.style.display = 'none';
        return showMyBook(book.data);
      })
      .catch(error => {
        Notiflix.Notify.failure('Ooops... Coś poszło nie tak! Proszę spróbuj ponownie.');
      });
  });

  updatePageButtons();
};

// Load / refresh page event listener //
window.addEventListener('load', () => {
  cardsList.innerHTML = '';
  booksIdList = localStorage.load('myBooksId'); // <--- "key"
  if (booksIdList.length === 0) {
    shoppingEmpty.style.display = 'flex';
    cardsList.removeEventListener('click', removeCardHandler);
    return;
  }

  if (booksIdList.length > booksPerPage) {
    document.querySelector('.pagination').style.display = 'block';
  } else {
    document.querySelector('.pagination').style.display = 'none';
  }
  renderList(booksIdList, currentPage);
  cardsList.addEventListener('click', removeCardHandler);
  updatePageButtons();
});

// Function to update current page when removing the last item
const updateCurrentPage = () => {
  if (booksIdList.length % booksPerPage === 0) {
    currentPage = Math.floor(booksIdList.length / booksPerPage);
  } else {
    currentPage = Math.floor(booksIdList.length / booksPerPage) + 1;
  }
};

// Function: remove card by book ID //
const removeCard = cardId => {
  const indexToRemove = booksIdList.indexOf(cardId);
  booksIdList.splice(indexToRemove, 1);
  localStorage.save('myBooksId', booksIdList);
  cardsList.innerHTML = '';

  if (booksIdList.length === 0) {
    shoppingEmpty.style.display = 'flex';
    cardsList.removeEventListener('click', removeCardHandler);
    return;
  }

  updateCurrentPage(); // Update the current page after removal
  renderList(booksIdList, currentPage);
};

// Event handler: remove button "click" //
const removeCardHandler = event => {
  if (!event.target.classList.contains('remove-button__box')) {
    return;
  }
  const removeCardId = event.target.dataset.id;
  removeCard(removeCardId);
};

// book counting function
updateBookCount();
