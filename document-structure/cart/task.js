document.addEventListener('DOMContentLoaded', function () {
    let plus = document.querySelector(".product__quantity-control_inc");
    let minus = document.querySelector(".product__quantity-control_dec");
    let value = document.querySelector(".product__quantity-value");
    let addToCartButton = document.querySelector(".product__add");
    
    //меняем кол-во товаров в каталоге 
    document.addEventListener('click', function (e) {
        if (e.target.classList.contains("product__quantity-control_inc")) {
            ++e.target.parentElement.querySelector(".product__quantity-value").textContent;
        } else if (e.target.classList.contains("product__quantity-control_dec")) {
            --e.target.parentElement.querySelector(".product__quantity-value").textContent;
        } 
    });
    
});