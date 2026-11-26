async function loadProducts()
{
    const response = await fetch("http://localhost:8000/products");
    const products = await response.json();

    const container = document.getElementById("products");

    for(const product of products)
    {
        const card = document.createElement("div");
        
        card.innerHTML = 
        `<h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>${product.price} €</p>
        `;

        container.appendChild(card);
    }
}

async function loadMenus()
{
    const response = await fetch("http://localhost:8000/menus");
    const menus = await response.json();

    const container = document.getElementById("menus");

    for(const menu of menus)
    {
        const card = document.createElement("div");

        card.innerHTML =
        `<h3>${menu.name}</h3>
        <p>${menu.description}</p>
        <p>${menu.price} €</p>
        `;

        container.appendChild(card);
    }
}

loadMenus();
loadProducts();
