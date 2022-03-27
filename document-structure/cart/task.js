document.addEventListener('DOMContentLoaded', function () {    
    //найдем продукты
    const products = document.querySelectorAll(".product");
    //контейнер продуктов в корзине
    const cartProducts = document.querySelector(".cart__products");
    //найдем элементы продуктов в контейнере продуктов 
    let cartProduct = cartProducts.getElementsByClassName("cart__product");
    
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        
        const plusButton = product.querySelector(".product__quantity-control_inc");
        const minusButton = product.querySelector(".product__quantity-control_dec");
        const addToCartButton = product.querySelector(".product__add");
        const productsCount = product.querySelector(".product__quantity-value");
        
        plusButton.onclick = function (event) {
            event.preventDefault();
        
            productsCount.textContent++;
        }
        
        minusButton.onclick = function (event) {
            event.preventDefault();
            
            if (productsCount.textContent > 1) {
                 productsCount.textContent--;
            }
        }
        
        addToCartButton.onclick = function (event) {
            event.preventDefault();
            
            //скопируем атрибут data-id
            const productId = product.getAttribute('data-id');
            
            //создать новый продукт в корзине
            const newcartProduct = document.createElement("div");
            newcartProduct.classList.add("cart__product");
            //добавим продукту нужный атрибут
            newcartProduct.setAttribute("data-id", productId);
            
            //в новый продукт скопируем изображение и счетчик
            const clonedImage = product.querySelector(".product__image").cloneNode(true);
            clonedImage.classList.add("cart__product-image");
            let clonedProductCounter = product.querySelector(".product__quantity-value").cloneNode(true);
            clonedProductCounter.classList.add("cart__product-count");
            
            //добавим в новый контейнер продукта картинку и счетчик
            newcartProduct.appendChild(clonedImage);
            newcartProduct.appendChild(clonedProductCounter);
            cartProducts.appendChild(newcartProduct);
            
            /*
            let arrayOfProducts = Array.from(cartProduct);
            arrayOfProducts.find(function(element, id){
                if (productId === newcartProduct.getAttribute('data-id')) {
                    
                } else {
                    return;
                }
            });
           */
            
        }    
    }  
});