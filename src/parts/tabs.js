
    /* 
          Tabs
    */

function tabs() {
   let tab = document.querySelectorAll('.tab_link'),
   slider = document.querySelector('.glazing_slider'),
   tabContent = document.querySelectorAll('.tab_content'),
   decTab = document.querySelectorAll('.dec_tab'),
   decContent = document.querySelector('.decoration_slider'),
   decTabContent = document.querySelectorAll('.dec_tab_content'),
   blueLine = document.querySelectorAll('.blue_line');


function hideTabContent(a, tabContent, activeClass) {
   for (let i = a; i < tabContent.length; i++) {
       tabContent[i].classList.remove('show');
       tabContent[i].classList.add('hide');
       if (tab[i].classList.contains(activeClass)) {
           tab[i].classList.remove(activeClass);
       }


   }
}


function hideTabContent2(a, tabContent, activeClass, blueLine) {
   for (let i = a; i < tabContent.length; i++) {
       tabContent[i].classList.remove('show');
       tabContent[i].classList.add('hide');
       if (blueLine[i].classList.contains(activeClass)) {
           blueLine[i].classList.remove(activeClass);
       }


   }
}

hideTabContent(1, tabContent, 'active');
hideTabContent(1, decTabContent, 'after_click');

function showTabContent(b, tabContent, tab, activeClass) {
   if (tabContent[b].classList.contains('hide')) {
       tabContent[b].classList.remove('hide');
       tabContent[b].classList.add('show');
       tab[b].classList.add(activeClass);
   }
}

function showTabContent2(b, tabContent, activeClass, blueLine) {
   if (tabContent[b].classList.contains('hide')) {
       tabContent[b].classList.remove('hide');
       tabContent[b].classList.add('show');
       blueLine[b].classList.add(activeClass);
   }
}


slider.addEventListener('click', function (event) {
   let target = event.target;
   if (target && target.classList.contains('tab_link')) {
       for (let i = 0; i < tab.length; i++) {
           if (target == tab[i]) {
               hideTabContent(0, tabContent, 'active');
               showTabContent(i, tabContent, tab, 'active');
               break;
           }
       }
   }
});

decContent.addEventListener('click', function (event) {
   let target = event.target;
   if (target && target.classList.contains('dec_tab')) {
       for (let i = 0; i < decTab.length; i++) {
           if (target == decTab[i]) {
               hideTabContent2(0, decTabContent, 'after_click', blueLine);
               showTabContent2(i, decTabContent, 'after_click', blueLine);
               break;
           }
       }
   }
});

}

module.exports = tabs;
