'use strict';
/*
add item:  add new <li> have event listener on form
check off item:  add new class shopping-item__checked event listener on check 
uncheck an item:  remove shopping-item__checked event lister on check
delete an item:  remove <li> event listener on delete
*/

function addItem() {

    $('#js-shopping-list-form').on('submit', event => {
        event.preventDefault();

        let itemName = $('.js-shopping-list-entry').val();
        console.log(`${itemName}`);

        $('.shopping-list').append(`<li><span class="shopping-item">${itemName}</span><div class="shopping-item-controls"><button class="shopping-item-toggle"><span class="button-label">check</span></button><button class="shopping-item-delete"><span class="button-label">delete</span></button></div></li>`);

    });

}

function checkItem() {
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
    });
}

function deleteItem() {
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
    });
}


$(addItem);
$(checkItem);
$(deleteItem);