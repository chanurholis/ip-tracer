function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    return re.test(String(email).toLowerCase());
}

validateEmail('<script>');

function sendMail() {
    var name    = document.getElementById("name").value;
    var email   = document.getElementById("email").value;
    var comment = document.getElementById("comments").value;

    validateEmail(email);

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('comment', comment);
}