const popupLinks = document.querySelectorAll('.popup-link');
const lockPadding = document.querySelectorAll('.lock-padding')


popupLinks.forEach(function(e){
  e.addEventListener('click', function(){
    let headerBlock = document.querySelector('.header_container');
    let html = document.documentElement;
    let marginSize = window.innerWidth - html.clientWidth
    let popupClose = popup.querySelector('#popupClose')
    let text = popup.querySelector('[data-text-send]')

    body.style.paddingRight =  marginSize + 'px';
    headerBlock.style.marginLeft = 18 + 'px';
    headerBlock.style.marginRight = 18 + 'px';
    body.style.overflow='hidden';
    popup.classList.add('open');
    text.innerText = e.innerText;

    popupClose.addEventListener('click', function(){
      popup.classList.remove('open');
      body.style.overflow='auto';
      body.style.paddingRight= 0+'px';
      headerBlock.style.margin = 0 + ' auto';
    })


  })
})
