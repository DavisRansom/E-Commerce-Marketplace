const newFormHandler = async (event) => {
    event.preventDefault();
    console.log('HELLO FROM THE FORM HANDLER')

    const id = document.querySelector('#user-id').textContent;
    console.log(id);
    const name = document.querySelector('#user-name').value.trim();
    const address = document.querySelector('#user-address').value.trim();
    const phone_number = document.querySelector('#user-phone-number').value.trim();
    const email = document.querySelector('#user-email').value.trim();
    const password = document.querySelector('#user-password').value.trim();

    if(name && address && phone_number && email && password){
        const response = await fetch(`/api/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify({name, address, phone_number, email, password}),
            headers: {
                'Content-Type': 'application/json',
              },
        });
        if(response.ok){
            document.location.replace('/api/users/profile')
        }
        else{
            alert('Failed to update user information');
        }
    }
}
document.querySelector('.user-form').addEventListener('submit', newFormHandler)