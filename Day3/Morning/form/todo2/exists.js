
async function validateEmailAsync() {
    const email = document.getElementById('email').value;
    const emailError = document.getElementById('error-email');
    try {
        const response = await fetch('https://api.exemple.com/check-email', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: { 'Content-Type': 'application/json' }
        });
        const result = await response.json();

        if (result.exists) {
            emailError.textContent = 'Cet email est déjà utilisé.';
        } else {
            emailError.textContent = '';
        }
    } catch (error) {
        emailError.textContent = 'Erreur de connexion.';
    }
}

document.getElementById('email').addEventListener('blur', validateEmailAsync);
