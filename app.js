
    const fillInputMessage = document.getElementById('fillInputMessage');
    const fingerprintBtn = document.getElementById('fingerprintBtn');

    function checkInputs() {
        const firstNameValue = firstName.value.trim();
        const lastNameValue = lastName.value.trim();
        const emailValue = email.value.trim();

        if (firstNameValue !== '' && lastNameValue !== '' && emailValue !== '') {
            fingerprintBtn.removeAttribute('disabled');
            fillInputMessage.style.display = 'none';
        } else {
            fingerprintBtn.setAttribute('disabled', 'true');
            fillInputMessage.style.display = 'block';
        }
    }

    firstName.addEventListener('input', checkInputs);
    lastName.addEventListener('input', checkInputs);
    email.addEventListener('input', checkInputs);

    function registerWithFingerprint(event) {
        event.preventDefault(); // Prevents the form from submitting via the button click

        const firstName = document.getElementById('firstName').value;
        const lastName = document.getElementById('lastName').value;
        const email = document.getElementById('email').value;

        if (firstName.trim() === '' || lastName.trim() === '' || email.trim() === '') {
            fillInputMessage.style.display = 'block';
        } else {
            console.log('Registered with Fingerprint:');
            console.log('First Name: ' + firstName);
            console.log('Last Name: ' + lastName);
            console.log('Email: ' + email);

            // Redirect to login page after registration
            window.location.href = 'login.html';
        }
    }

    fingerprintBtn.addEventListener('click', registerWithFingerprint);
