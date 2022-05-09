$(document).ready(function () {
    $(".mobile-filter-btn").click(function () {
        $(".plp-filter").addClass("visible");
    });
    $(".mob-heading-close-btn").click(function () {
        $(".plp-filter").removeClass("visible");
    });
    $("#procductsubscribe").click(function () {
        document.getElementById('subsribe-view').style.display = 'block';
    });
    $("#purchaseonce").click(function () {
        document.getElementById('subsribe-view').style.display = 'none';
    });
    //toggle-icon
    $(".drop-arrow").click(function () {
        $(".drop-arrow").toggleClass("rotate");
    });
    //gift-card-icon
    $(".gift-card-title").click(function () {
        $(".fa-chevron-down").toggleClass("rotate");
    });
    //apply-discount-mobile-hide/show
    $("#ApplyDiscountCode").click(function () {
        $(this).toggleClass("show");
        $(".apply-discount").toggleClass("show");
    });
    //gift-card-icon-mobile-hide/show
    $("#GiftCards").click(function () {
        $(this).toggleClass("show");
        $(".apply-gift-card").toggleClass("show");
    });
    $(".checkout-signin").click(function () {
        $(".checkout-sign-in-form").addClass("show");
    });
    $(".close-form").click(function () {
        $(".checkout-sign-in-form").removeClass("show");
    });
    $(".mini-cart-ref").click(function () {
        $(".order-summary-wrap").addClass("show");
    });
    $(".close-order-summary").click(function () {
        $(".order-summary-wrap").removeClass("show");
    });
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})

//PDP Quantity Counter
function increment() {
    document.getElementById('product-qty').stepUp();
}
function decrement() {
    document.getElementById('product-qty').stepDown();
}