/* 
        Pictures
*/

function pictures() {

  let img = document.createElement("IMG"),
    imgLink = document.querySelectorAll('.img_link'),
    overlay2 = document.querySelector('.overlay');


  function closeImage() {
    img.style.display = 'none';
    overlay2.style.display = 'none';
  }


  for (let i = 0; i < imgLink.length; i++) {
    imgLink[i].addEventListener('click', function () {
      img.setAttribute("src", "img/our_works/big_img/" + (i + 1) + ".png");
      img.classList.add('img_works');

      document.body.appendChild(img);
      img.style.display = 'block';
      overlay2.style.display = 'block';

    });

  }


  for (let i = 0; i < imgLink.length; i++) {
    img.addEventListener('click', closeImage);
  }

  overlay2.addEventListener('click', closeImage);

}

module.exports = pictures;