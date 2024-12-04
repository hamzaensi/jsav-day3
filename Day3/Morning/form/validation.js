function validateForm() {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let phone = document.getElementById('phone').value;
    let error = document.getElementById('error');
    error.textContent = "";

    // Validation du nom d'utilisateur (lettres et chiffres, entre 3 et 15 caractères)
    /*
    const usernameRegex = /^[a-zA-Z0-9]{3,15}$/;
        Explication :
        ^ : Début de la chaîne.
        [a-zA-Z0-9] : Autorise les lettres majuscules (A-Z), les lettres minuscules (a-z), et les chiffres (0-9).
        {3,15} : Limite la longueur à un minimum de 3 caractères et un maximum de 15.
        $ : Fin de la chaîne.
    */
    let usernameRegex = /^ $/;
    if (!usernameRegex.test(username)) {
        error.textContent = "Nom d'utilisateur invalide.";
        return false;
    }

    // Validation de l'email forme générale
    const emailGeneralRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // puis un email se termine par google.fr
    const emailGoogleRegex = /^[a-zA-Z0-9._%+-]+@google\.fr$/;
    /*
    1. Expression générale :
        ^[a-zA-Z0-9._%+-]+ : Autorise une suite de lettres, chiffres, points (.), tirets (-), et signes (_, %, +).
        @ : Doit inclure le symbole @.
        [a-zA-Z0-9.-]+ : Autorise le domaine avec lettres, chiffres, tirets (-), ou points (.).
        \.[a-zA-Z]{2,}$ : Le domaine de premier niveau doit être composé de lettres (comme .com, .org, .fr, etc.) avec au moins 2 caractères.
        2. Expression pour @google.fr :
        Identique à la première, sauf qu'elle fixe le domaine exactement à @google.fr grâce à google\.fr.
        */
    let emailRegex = ;
    if (!emailRegex.test(email)) {
        error.textContent = "Adresse e-mail invalide.";
        return false;
    }

    // Validation du mot de passe (au moins 8 caractères, majuscule, minuscule, chiffre, caractère spécial)
    //const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    /*
    Explication:
^ : Début de la chaîne.
(?=.*[a-z]) : Au moins une lettre minuscule.
(?=.*[A-Z]) : Au moins une lettre majuscule.
(?=.*\d) : Au moins un chiffre.
(?=.*[@$!%*?&]) : Au moins un caractère spécial parmi @$!%*?&.
[A-Za-z\d@$!%*?&]{8,} : Autorise les lettres, chiffres et caractères spéciaux, avec une longueur minimale de 8 caractères.
$ : Fin de la chaîne.*/
    let passwordRegex = ;
    if (!passwordRegex.test(password)) {
        error.textContent = "Mot de passe invalide.";
        return false;
    }

    // 1- Validation du numéro de téléphone (format 123-456-7890)
    // 2- il faut que le numero commence par 07 
    const phoneGeneralRegex = /^\d{3}-\d{3}-\d{4}$/;
    const phoneStartsWith07Regex = /^07\d-\d{3}-\d{4}$/;
    /*
    1. Format général :
^\d{3} : Trois chiffres au début.
- : Suivis d’un tiret.
\d{3} : Trois chiffres au milieu.
- : Un autre tiret.
\d{4}$ : Quatre chiffres à la fin.
2. Format commençant par 07 :
^07 : Le numéro doit commencer par 07.
\d : Un chiffre après 07.
-\d{3}-\d{4} : Reste du format identique à la première expression.
    */
    let phoneRegex = ;
    if (!phoneRegex.test(phone)) {
        error.textContent = "Numéro de téléphone invalide.";
        return false;
    }

    alert("Formulaire validé avec succès !");
    return true;
}
