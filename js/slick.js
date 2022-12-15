// Dokumentacja jest dostepna na githubie dotyczacym biblioteki slick js
// tworzymy funkcje w jquery odpowiedzialna za przewijanie opinii
$(document).ready(function () {
    // odnosimy się do klasy recviews__boxes, która przechowuje wszystkie boxy z opiniami
    $('.reviews__boxes').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        mobileFirst: true,
        responsive: [{
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }],

    });
})