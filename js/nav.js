function updateNav()
{
    const token = localStorage.getItem("token");

    const visitorLinks = document.querySelectorAll(".visitor");
    const connectedLinks = document.querySelectorAll(".connected");

    if(token === null)
    {
        for(const link of connectedLinks)
        {
            link.hidden = true;
        }
    }
    else
    {
        for(const link of visitorLinks)
        {
            link.hidden = true;
        }
    }
    
    const logoutButton = document.getElementById("logout-button");
    logoutButton.addEventListener("click", function()
    {
        localStorage.removeItem("token");
        window.location.href = "index.html";
    });
}

updateNav();