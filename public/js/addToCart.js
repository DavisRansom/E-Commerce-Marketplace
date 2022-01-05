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
                
                const localStorageArray = JSON.parse(localStorage.getItem('products'))
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
//Updates the cart number for items in cart
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

// Grab data from localstorage
const products = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : [];
const tableBody = document.querySelector(".table-body");

products.forEach(product => {
    const tr = document.createElement("tr");
    tr.classList.add("cart-row")
    tr.innerHTML = `
    <td scope="row"><img src="${product.product_img}" 
    class="cart-img" alt="${product.alt}" width="100px" height="100px"> ${product.product_name}</td>
    <td>$ ${product.price}</td> 
    <td>
      <input class="form-input text-center" type="number" id="product-quantity" name="product-quantity"/>
    </td>
    <td><i class="fas fa-trash-alt text-danger delete-cart-item"></i></td>
    `
    tableBody.appendChild(tr)
})
