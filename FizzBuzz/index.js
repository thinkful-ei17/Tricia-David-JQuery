function fizzBuzz() {

    $('#number-chooser').on('submit', event => {

        event.preventDefault();

        const numEntered = parseInt($('#number-choice').val());
        console.log(numEntered);
        for (let i = 1; i <= numEntered; i++) {
            if (i % 15 === 0) {
                console.log(15);
                $('.js-result').append('<div class="fizz-buzz-item fizzbuzz"></div>');
                $('.fizz-buzz-item').append("<span>fizzbuzz</span>");
            } else if (i % 5 === 0) {
                console.log(5);
                $('.js-result').append('<div class="fizz-buzz-item buzz"><span>"buzz"</span></div>');
            } else if (i % 3 === 0) {
                console.log(3);
                $('.js-result').append('<div class="fizz-buzz-item fizz"><span>"fizz"</span></div>');
            } else {
                console.log(0);
                $('.js-result').append(`<div class="fizz-buzz-item"><span>${i}</span></div>`);
            }
        }
    });
}
$(fizzBuzz);