const addProductHandler = async (event) => {
    event.preventDefault();

    
  
    const product_name = document.querySelector('#product-name').value.trim();
    const price = document.querySelector('#product-price').value.trim();
    const description = document.querySelector('#product-desc').value.trim();
    const product_img = document.querySelector('#product-img').value.trim();
    const alt = document.querySelector('#product-alt').value.trim();
    const categoryIdEl = document.querySelector('#category-select');

    const category_id = categoryIdEl.value

    // console.log(category_id);

    if (product_name && price && description&& product_img && alt) {
      const response = await fetch(`/api/products`, {
        method: 'POST',
        body: JSON.stringify({ product_name, price, description, product_img, alt }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      //Grab id of the product we just create above
      let product_id;

      if (response.ok) {
        await fetch('/api/products')
        .then((res)=>{
          return res.json()
        }).then((products)=>{
          product_id = products[products.length - 1].id
        })

        const catProdResponse = await fetch(`/api/categoryproducts`, {
          method: 'POST',
          body: JSON.stringify({ product_id, category_id}),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        alert('Product has been created');
        document.location.replace('/api/users/profile');
      } else {
        alert('Failed to create product');
      }
    }
  };
  
  const delButtonHandler = async (event) => {

    console.log(event.target.getAttribute('data-id'));

    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
      console.log(id)
  
      const response = await fetch(`/api/products/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/api/users/profile')
      } else {
        alert('Failed to delete product');
      }
    }
  };

  const addCategoryHandler = async (event) => {
    event.preventDefault();

    const category_name = document.querySelector('#category_name').value.trim();
    const category_img = document.querySelector('#category_img').value.trim();

    if (category_img && category_name) {
      const response = await fetch(`/api/categories`, {
        method: 'POST',
        body: JSON.stringify({ category_name, category_img }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        alert('Category has been created');
        document.location.replace('/api/users/profile');
      } else {
        alert('Failed to create category');
      }
    }


  }

  document
    .querySelector('.new-category-form')
    .addEventListener('submit', addCategoryHandler);
  
  document
    .querySelector('.new-product-form')
    .addEventListener('submit', addProductHandler);
  
  $(document)
    .on('click', '.delete-btn', delButtonHandler);
  