'use strict';
const customBtn = document.querySelector('.custom-btn');
const rateSelected = document.querySelector('.rate-selected');
const ratingState = document.querySelector('#rating-state');
const thankYouState = document.querySelector('#thank-you-state');

let rate = 0;


$(".radio-button").on("click", function() {
    rate = $(this).text();
    $(".radio-button").removeClass('checked');
    $(this).addClass('checked');
    console.log(rate);
});

customBtn.addEventListener('click', () => {
    if (rate === 0 )    {
        alert("Please rate us!")
    }   else {
        rateSelected.innerHTML = rate;
        ratingState.style.display = "none";
        thankYouState.style.display = "block";
    }
});
