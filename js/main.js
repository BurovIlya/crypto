if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}


document.querySelectorAll('.dropdown').forEach( function (dropDownWrapper) {

    const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
    const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
    const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
    const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');

    dropDownBtn.addEventListener('click', function (){
        dropDownList.classList.toggle('dropdown__list--visible');
        
    });

    dropDownListItems.forEach(function (listItem) {
        listItem.addEventListener('click', function (e) {
            e.stopPropagation();
            if( this.closest('.market__header-btns') ) {
               dropDownBtn.firstElementChild.innerText = this.innerText;
            } else {
                dropDownBtn.innerText = this.innerText;
            }
            
            dropDownBtn.focus();
            dropDownInput.value = this.dataset.value;
            dropDownList.classList.remove('dropdown__list--visible');
        });
    });

    document.addEventListener('click', function (e) {
        if ( e.target !== dropDownBtn ) {
            dropDownList.classList.remove('dropdown__list--visible');
        }
    });

    document.addEventListener('keydown', function (e) {
    
        if ( e.key === 'Tab' || e.key === 'Escape' ) {
            dropDownList.classList.remove('dropdown__list--visible');
        }
  
    });

});


