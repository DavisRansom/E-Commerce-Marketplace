const signupFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (name && email && password) {
        const userResponse = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
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