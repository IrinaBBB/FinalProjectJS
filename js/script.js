window.addEventListener('DOMContentLoaded', function () {

  'use strict';
  /* 
    Header -> Pop-up window
  */

  let headerBtn = document.querySelector('.header_btn'),
    popupEn = document.querySelector('.popup_engineer'),
    overlay = document.querySelector('.overlay'),
    close = document.getElementsByClassName('popup_close')[1];


  headerBtn.addEventListener('click', function () {
    popupEn.style.display = 'block';
    overlay.style.display = 'block';
  });

  function closeModal() {
    popupEn.style.display = 'none';
    overlay.style.display = 'none';
  }


  overlay.addEventListener('click', closeModal);
  close.addEventListener('click', closeModal);

});