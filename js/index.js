async function loadProducts()
{
    const responseCategories = await fetch("http://localhost:8000/categories");
    const categories = await responseCategories.json();

    const responseProducts = await fetch("http://localhost:8000/products");
    const products = await responseProducts.json();

    const container = document.getElementById("products");

    for(const category of categories)
    {
        const title = document.createElement("h3");
        title.textContent = category.name;
        container.appendChild(title);

        for(const product of products)
        {
            if(product.category_id == category.id)
            {
                const card = document.createElement("div");
                card.innerHTML =
                `<h4>${product.name}</h4>
                <p>${product.description}</p>
                <p>${product.price} €</p>
                `;
                container.appendChild(card);
            }
        }
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
