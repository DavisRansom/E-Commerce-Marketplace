

const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const phone_number = document.querySelector('#phone_number-signup').value.trim();

    const isAdmin = document.querySelector('#idAdmin-signup')
    console.log(isAdmin);

    if (!name || !email || !password || !address || !phone_number) {
        return;
    }
    let userObject = {
        name,
        email,
        password,
        address,
        phone_number,
        isAdmin
    }

    fetch('/api/users/createuser', {
        method: 'POST',
        body: JSON.stringify(userObject),
        headers: { 'Content-Type': 'application/json' },
    }).then((response) => response.json())
        .then((data) => {
            document.location.replace('/');
        })
}
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);