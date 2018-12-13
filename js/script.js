window.addEventListener('DOMContentLoaded', function () {

  'use strict';
  /* 
    Header -> Pop-up window
  */

  let headerBtn = document.querySelector('.header_btn'),
    popupEn = document.querySelector('.popup_engineer'),
    overlay = document.querySelector('.overlay'),
    close = document.getElementsByClassName('popup_close')[1],
    phoneLink = document.getElementsByClassName('phone_link');

  function openModal() {
    popupEn.style.display = 'block';
    overlay.style.display = 'block';
  }

  function closeModal() {
    popupEn.style.display = 'none';
    overlay.style.display = 'none';
  }


  headerBtn.addEventListener('click', openModal);

  for (let i = 0; i < phoneLink.length; i++) {
    phoneLink[i].addEventListener('click', openModal);
  }

  close.addEventListener('click', closeModal);
  popupEn.addEventListener('click', function (event) {

    if (event.target.closest(".popup_dialog")) return;
    closeModal();

  });

});