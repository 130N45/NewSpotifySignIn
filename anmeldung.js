const handleLogin = () => {
    let username = document.getElementById('username').value
    let password = document.getElementById('password').value

    if (username === 'admin' && password === '123') {
        let usernameText = document.getElementById('usernameText')
        usernameText.innerHTML = username

        let login = document.getElementById('login')
        let secret = document.getElementById('secret')
        login.style.display = 'none'
        secret.style.display = 'block'

    } else
        alert('Falsche Anmeldedaten')
}

const handleLogout = () => {
    let login = document.getElementById('login')
    login.style.display = 'block'

    let secret = document.getElementById('secret')
    secret.style.display = 'none'

    usernameInput.value = ''
    passwordInput.value = ''
}