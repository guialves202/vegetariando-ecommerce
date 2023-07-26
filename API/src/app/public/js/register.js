const form = document.querySelector('#registerForm');

form.addEventListener('submit', (event) => {

    const name = document.querySelector('#name').value;
    const surname = document.querySelector('#surname').value;
    const email = document.querySelector('#email').value;
    const cpf = document.querySelector('#cpf').value;

    const sexoSelect = document.querySelector('#sexo');
    const sexo = sexoSelect.options[sexoSelect.selectedIndex].value;

    const nascimento = document.querySelector('#nascimento').value;
    const telefone = document.querySelector('#telefone').value;
    const passw = document.querySelector('#passw').value;
    const passw2 = document.querySelector('#passw2').value;

    const formData = {
        name,
        surname,
        email,
        cpf,
        sexo,
        nascimento,
        telefone,
        passw,
        passw2
    }

    if(!(emptyValidation(formData)) || !(equalPasswordValidation(passw, passw2))) {
        event.preventDefault();
    }

})

function emptyValidation(obj) {
    let erros = false;
    for(const key in obj) {
        if(!obj[key] || obj[key] == null || obj[key] == undefined || obj[key] == '' || obj[key] == ' ' || obj[key].length > 50 || obj[key].length < 3) {
            erros = true;
        }
    }
    return !erros;
}

function equalPasswordValidation(password1, password2) {
    return password1 === password2;
}