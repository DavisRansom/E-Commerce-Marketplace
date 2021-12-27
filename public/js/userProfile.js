const newFormHandler = async (event) => {
    event.preventDeafult();

    const id = document.querySelector('#user-id');
    const name = document.querySelector('#user-name');
    const address = document.querySelector('#user-name');
    const phone_number = document.querySelector('#user-name');
    const email = document.querySelector('#user-name');
    const password = document.querySelector('#user-name');

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