var idUsuario = document.getElementById('idUsuario');
var senha = document.getElementById('senhaUsuario');

function validarLogin() {
    if (!idUsuario.value) {
        alertarUsuario(idUsuario);

    } else if (idUsuario.value != 'testuser') {
        erroUsuario(idUsuario, 'ID');

    } else {
        elementoValido(idUsuario);
    }

    if (!senha.value) {
        alertarUsuario(senha);

    } else if (senha.value != 'mypassword') {
        erroUsuario(senha, 'Senha');

    } else {
        elementoValido(senha);
    }
}

function cancelar() {
    elementoNeutro(idUsuario);
    elementoNeutro(senha);
}

function alertarUsuario(elemento) {
    elemento.style.setProperty('border', 'var(--border-alerta)');
    elemento.title = 'Preencha este campo.';
}

function erroUsuario(elemento, campo) {
    elemento.style.setProperty('border', 'var(--border-erro)');
    elemento.title = `${campo} não correspondido.`;
}

function elementoValido(elemento) {
    elemento.style.setProperty('border', 'var(--border-certo)');
    elemento.style.setProperty('border-radius', 'var(--boder-radius)');
}

function elementoNeutro(elemento) {
    elemento.style.setProperty('border', 'var(--border-neutro)');
    elemento.style.setProperty('border-radius', 'var(--boder-radius)');
    elemento.value = '';
}