let productArray = [];


//Add to Cart function stores into local storage
const addToCart = async (event) => {

    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');

        await fetch(`/api/products/atc/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            return response.json()
        })
            .then((productData) => {
                const localStorageArray = JSON.parse(localStorage.getItem('products'));
                if (localStorageArray === null) {
                    productArray.push(productData)
                    localStorage.setItem('products', JSON.stringify(productArray))
                    console.log(productArray)
                    location.reload()
                } else {
                    productArray = localStorageArray
                    productArray.push(productData)
                    localStorage.setItem('products', JSON.stringify(productArray))
                    console.log(productArray)
                    location.reload()
                }


            })
    }
}

let cartSizeEl = document.querySelector('#cart-size');
let cartObject = localStorage.getItem('products')
let cartSizeValue;

if (cartObject === null) {
    cartSizeValue = null
} else {
    cartSizeValue = JSON.parse(cartObject).length
}
cartSizeEl.textContent = cartSizeValue;

$('.add-to-cart').on('click', addToCart);