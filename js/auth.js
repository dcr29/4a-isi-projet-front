const loginForm = document.getElementById("login-form");

loginForm.addEventListener("submit", async function(event)
{
    event.preventDefault();

    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    const response = await fetch("http://localhost:8000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    });

    const message = document.getElementById("login-message");

    if(response.status === 200)
    {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        message.textContent = "Connexion réussie";
        window.location.href = "index.html";
    }
    else if(response.status === 401)
    {
        message.textContent = "Nom d'utilisateur ou mot de passe incorrect";
    }
    else if(response.status === 403)
    {
        message.textContent = "Votre compte a été bloqué";
    }
    else
    {
        message.textContent = "Une erreur est survenue";
    }
}); 

const registerForm = document.getElementById("register-form");

registerForm.addEventListener("submit", async function(event)
{
    event.preventDefault();

    const username = document.getElementById("register-username").value;
    const response = await fetch("http://localhost:8000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username })
    });

    const message = document.getElementById("register-message");
    
    if(response.status === 201)
    {
        const data = await response.json();
        localStorage.setItem("token", data.token);
        message.textContent = "Compte créé ! Ton mot de passe est : " + data.generated_password + " note-le bien, il ne sera plus jamais affiché.";
        document.getElementById("continue-link").hidden = false;
    }
    else if(response.status === 409)
    {
        message.textContent = "Nom d'utilisateur déjà utilisé";
    }
    else
    {
        message.textContent = "Une erreur est survenue";
    }
});