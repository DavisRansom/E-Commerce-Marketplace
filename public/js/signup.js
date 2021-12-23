const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const phone_number = document.querySelector('#phone_number-signup').value.trim();

    const isAdmin = document.querySelector('#idAdmin-sign-up').checked;

    if (name && email && password && address && phone_number) {
        const userResponse = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password, phone_number, isAdmin }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (userResponse.ok) {
            document.location.replace('/profile');
        } else {
            alert(userResponse.statusText);
        }
    }
};
document
    .querySelector('.signup-form')
    .addEventListener('submit', signupFormHandler);