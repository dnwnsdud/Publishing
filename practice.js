let sec2_slide = new Swiper(".sec2_slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    slidesPerGroup: 3,
    pagination: {
        el: ".pg",
    },
});
let sec4_slide = new Swiper(".sec4_slide", {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
        nextEl: ".sec4_next",
        prevEl: ".sec4_prev",
    },
});