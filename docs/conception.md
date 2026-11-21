# Conception du front-end — Pol-eat-heck
 
## 1. Les pages
 
| Fichier | Page | Accès | Rôle |
| :--- | :--- | :--- | :--- |
| `index.html` | Catalogue | Tout le monde | Voir les produits et menus, les ajouter au panier |
| `auth.html` | Connexion / Inscription | Visiteur | Se connecter ou créer un compte |
| `cart.html` | Panier | Connecté | Choisir la date de retrait et valider la commande |
| `orders.html` | Mes commandes | Connecté | Voir l'historique de ses commandes |
| `account.html` | Mon compte | Connecté | Voir ses infos, changer son mot de passe |
| `admin-orders.html` | Commandes (admin) | Admin | Voir les commandes du jour, changer leur statut |
| `admin-products.html` | Produits (admin) | Admin | Gérer les produits et les catégories |
| `admin-menus.html` | Menus (admin) | Admin | Gérer les menus et leur composition |
| `admin-closures.html` | Fermetures (admin) | Admin | Gérer les jours de fermeture |
| `admin-users.html` | Utilisateurs (admin) | Admin | Voir les comptes, bloquer / débloquer |

## 2. La navigation
 
```mermaid
flowchart TD
    index["Catalogue<br/>index.html"]
    auth["Connexion / Inscription<br/>auth.html"]
    cart["Panier<br/>cart.html"]
    orders["Mes commandes<br/>orders.html"]
    account["Mon compte<br/>account.html"]
 
    subgraph admin ["Administration"]
        aorders["Commandes<br/>admin-orders.html"]
        aproducts["Produits<br/>admin-products.html"]
        amenus["Menus<br/>admin-menus.html"]
        aclosures["Fermetures<br/>admin-closures.html"]
        ausers["Utilisateurs<br/>admin-users.html"]
    end
 
    index -- "Se connecter" --> auth
    auth -- "Connexion / inscription réussie" --> index
    index -- "Voir le panier" --> cart
    cart -- "Commande validée" --> orders
    index -- "Mes commandes" --> orders
    index -- "Mon compte" --> account
    index -- "Administration" --> aorders
 
    classDef public fill:#E1F5EE,stroke:#0F6E56,color:#085041
    classDef connecte fill:#EEEDFE,stroke:#534AB7,color:#3C3489
    classDef adm fill:#FAECE7,stroke:#993C1D,color:#712B13
    class index,auth public
    class cart,orders,account connecte
    class aorders,aproducts,amenus,aclosures,ausers adm
```

Légende : vert = tout le monde, violet = utilisateur connecté, orange = admin.

### La barre de menu selon le profil
 
La barre de menu est présente sur toutes les pages. Son contenu dépend de qui est connecté :
 
| Profil | Liens affichés |
| :--- | :--- |
| Visiteur | Catalogue - Connexion |
| Utilisateur (`standard`) | Catalogue - Panier - Mes commandes - Mon compte - Déconnexion |
| Admin (`admin`) | Les mêmes que l'utilisateur + Produits - Menus - Fermetures - Utilisateurs |