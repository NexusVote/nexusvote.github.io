//Methoden für die Cookies
function starting() {
    if (sessionStorage.getItem('cookieallowed') == 1) {
        document.getElementById('cookieconsent').classList.add('invisible');
    } else {
        document.getElementById('cookieconsent').classList.remove('invisible');
    }
}

function allowed() {
    sessionStorage.setItem('cookieallowed', 1);
    document.getElementById('cookieconsent').classList.add('invisible');
}