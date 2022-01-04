//Grab array of products from LocalStorage
let productArray = JSON.parse(localStorage.getItem('products'));

console.log(productArray);
//Grab User ID from backend
const user_id = document.querySelector('#user-id').textContent;

//Grab order ID we just created
let order_id;

//Method to post to order product routes
const postNewOrderProduct = async (product_id, order_id) => {

    if (product_id && order_id) {
        const response = await fetch(`/api/orderproducts`, {
            method: 'POST',
            body: JSON.stringify({ product_id, order_id }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
    }
}
//Post a new Order pass in the User ID above
fetch(`/api/orders`, {
    method: 'POST',
    body: JSON.stringify({ user_id }),
    headers: {
        'Content-Type': 'application/json',
    },
}).then(() => {
    fetch('/api/orders/')
        .then((res) => {
            return res.json()
        }).then((orders) => {
            order_id = orders[orders.length - 1].id


            //Use for loop to loop through productArray
            for (var i = 0; i < productArray.length; i++) {
                postNewOrderProduct(productArray[i].id, order_id)
            }

            localStorage.clear();
        })
})












