/* 
        Forms
*/


function forms() {

let message = {
  loading: 'Загрузка...',
  success: 'Спасибо! Скоро мы с вами свяжемся!',
  failure: 'Что-то пошло не так...'
};

let phoneInput = document.querySelectorAll('.user_phone'),
  form = document.getElementsByClassName('form'),
  input = document.getElementsByTagName('input'),
  statusMessage = document.createElement('div');

for (let i = 0; i < phoneInput.length; i++) {
  phoneInput[i].addEventListener('input', function () {
    this.value = this.value.replace(/[^0-9+]/ig, '');
  });
}





function sendForm(elem) {
  elem.addEventListener('submit', function (e) {
    e.preventDefault();
    elem.appendChild(statusMessage);
    let formData = new FormData(elem);
    let obj = {};
    formData.forEach(function (value, key) {
      obj[key] = value;
    });
    let json = JSON.stringify(obj);


    function postData() {
      return new Promise(function (resolve, reject) {
        let request = new XMLHttpRequest();

        request.open('POST', 'server.php');
        request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        request.onreadystatechange = function () {
          if (request.readyState < 4) {
            resolve();
          } else if (request.readyState === 4) {
            if (request.status == 200 && request.status < 3) {
              resolve();
            } else {
              reject();
            }
          }
        }

        request.send(json);


      });
    }

    function clearInput() {
      for (let i = 0; i < input.length; i++) {
        input[i].value = '';
      }
    }

    postData(formData)
      .then(() => statusMessage.innerHTML = message.loading)
      .then(() => statusMessage.innerHTML = message.success)
      .catch(() => statusMessage.innerHTML = message.failure)
      .then(clearInput);


  });
}

for (let i = 0; i < form.length; i++) {
  sendForm(form[i]);
}



/* 
        Calculator
*/


let popUpCalc = document.querySelector('.popup_calc'),
  glazingBtn = document.querySelectorAll('.glazing_price_btn'),
  closeCalc = document.querySelector('.popup_calc_close'),
  balconTabs = document.querySelectorAll('.balc_tab'),
  pictures = document.querySelector('.big_img'),
  balconContents = pictures.querySelectorAll('img'),
  infoBalcon = document.querySelector('.balcon_icons'),
  calcButton = document.querySelector('.popup_calc_button'),
  calcProfile = document.querySelector('.popup_calc_profile'),
  calcMiddleButton = document.querySelector('.popup_calc_profile_button'),
  calcEnd = document.querySelector('.popup_calc_end'),
  finalClose = document.querySelector('.popup_calc_end_close'),
  middleClose = document.querySelector('.popup_calc_profile_close'),
  width = document.querySelector('#width'),
  height = document.querySelector('#height'),
  checkbox = document.querySelectorAll('.checkbox-custom'),
  checkboxTag = document.querySelectorAll('.checkbox'),
  finalButton = document.querySelector('.final'),
  overlay = document.querySelector('.overlay');


let calcData = {};



width.addEventListener('input', function () {
  this.value = this.value.replace(/[^0-9]/ig, '');
});

height.addEventListener('input', function () {
  this.value = this.value.replace(/[^0-9]/ig, '');
});



function openCalcModal() {
  popUpCalc.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';

}

function closeCalcModal() {
  popUpCalc.style.display = 'none';
  overlay.style.display = 'none';
  document.body.style.overflow = '';

}

for (let i = 0; i < glazingBtn.length; i++) {
  glazingBtn[i].addEventListener('click', openCalcModal);


}


closeCalc.addEventListener('click', closeCalcModal);




function hideCalcContent(a) {
  for (let i = a; i < balconContents.length; i++) {
    balconContents[i].classList.remove('show');
    balconContents[i].classList.add('hide');
  }
}

hideCalcContent(1);

function showCalcContent(b) {
  if (balconContents[b].classList.contains('hide')) {
    balconContents[b].classList.remove('hide');
    balconContents[b].classList.add('show');
  }
}

infoBalcon.addEventListener('click', function (event) {
  let target = event.target;
  if (target && target.classList.contains('balc_tab')) {
    for (let i = 0; i < balconTabs.length; i++) {
      if (target == balconTabs[i]) {
        hideCalcContent(0);
        showCalcContent(i);
        break;
      }
    }
  }
});


calcButton.addEventListener('click', function () {
  calcProfile.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  popUpCalc.style.display = 'none';
  calcData.calcWidth = width.value;
  calcData.calcHeight = height.value;

});

calcMiddleButton.addEventListener('click', function () {
  calcEnd.style.display = 'block';
  overlay.style.display = 'block';
  document.body.style.overflow = 'hidden';
  calcProfile.style.display = 'none';
  calcData.cold = checkboxTag[0].checked;
  calcData.warm = checkboxTag[1].checked;
  calcData.type = document.querySelector('#view_type').value;

});

finalButton.addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('.final_form').appendChild(statusMessage);
  calcData.name = document.querySelector('.final_name').value;
  calcData.phone = document.querySelector('.final_phone').value;
  document.body.style.overflow = '';


  let finalJson = JSON.stringify(calcData);


  function postFinalData() {
    return new Promise(function (resolve, reject) {
      let request = new XMLHttpRequest();

      request.open('POST', 'server.php');
      request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
      request.onreadystatechange = function () {
        if (request.readyState < 4) {
          resolve();
        } else if (request.readyState === 4) {
          if (request.status == 200 && request.status < 3) {
            resolve();
          } else {
            reject();
          }
        }
      }

      request.send(finalJson);
    });
  }

  function clearInput() {
    for (let i = 0; i < input.length; i++) {
      input[i].value = '';
    }
  }
  postFinalData(calcData)
    .then(() => statusMessage.innerHTML = message.loading)
    .then(() => statusMessage.innerHTML = message.success)
    .catch(() => statusMessage.innerHTML = message.failure)
    .then(clearInput);
});

finalClose.addEventListener('click', function () {
  calcEnd.style.display = 'none';
  overlay.style.display = 'none';
  document.body.style.overflow = '';

});

middleClose.addEventListener('click', function () {
  calcProfile.style.display = 'none';
  overlay.style.display = 'none';
  document.body.style.overflow = '';

});





for (let i = 0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('click', function () {
    for (let i = 0; i < checkboxTag.length; i++) {
      checkboxTag[i].checked = false;
    }
    this.checked = true;

  });
}

}

module.exports = forms;