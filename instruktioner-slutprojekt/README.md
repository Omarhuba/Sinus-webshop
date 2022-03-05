# SINUS Webshop
## Slutprojekt för kurserna Agil Utveckling och Javascript med Ramverk

## Instruktioner
Ni ska bygga en FrontEnd till en färdig BackEnd. Se `SINUS Webshop - REST API` nedan för mer information.

Inom gruppen har ni en uppsättning mockups för Webshoppen från UX/UI-kursen i höstas, gå igenom och välj en av dessa mockups att utgå ifrån. Mocken som ni har skapat är inte helt komplett för denna applikation utan är mer en skiss som ni kan utgå ifrån.

Skapa en trello board och bjud in alla i gruppen, inkl läraren.

Skapa ett nytt publikt repository(ej fork) och bjud in alla i gruppen, inkl läraren.

## Arbetssätt
Ni ska arbeta enligt Scrumban som är blandningen av Scrum och Kanban.
Ni ska ta fram User Stories och använda en Kanban board i Trello för att dokumentera hela processen.

Totalt har ni lite mer än 9 arbetsdagar på er, dessa behöver ni i teamet planera (Rekommenderat är 3st 3-dagar sprintar).

## SINUS Webshop

SINUS Webshop är en onlinebutik som säljer skateboards och tillbehör.

Webshoppen ska ha 3 olika lägen för 3 olika roller.
* Anonym besökare
* Inloggad Kund
* Inloggad Admin (VG-krav)

### Anonym besökare
Det ska finnas en `registrerings`-view med ett registreringsformulär.
En order kan genomföras som anonym användare.

### Inloggad Kund
Det ska finnas en `My Account`-view med information om ditt konto och din orderhistorik.

### Inloggad Admin (VG-krav)
Det ska finnas en `Admin Area`-view med ett gränssnitt för att redigera, skapa  och radera produkter.
Samt en översikts-vy över alla Ordrar och ett gränssnitt för att ändra varje orders status.

### Övriga Views och Features
* En view för produktlista
* En view utcheckning med formulär för kontaktinfo, fylls i automagiskt om man är inloggad
* Modal/View för enstaka produkt
* Modal/View för kundkorg
* Modal/View för inloggningsformulär

## SINUS Webshop - REST API

### Setup
1. Klona ner repot
1. Navigera till `sinus-backend`
1. `npm install`
1. `npm run setup`
1. `npm run seed`
1. `npm start`

Om du vill nollställa databasen kör `npm run seed` en gång till.
### EndPoints

| Resurs | Metod | Detaljer | Request Body | Query
| ------ | ------ | ------ | ------ | ------ |
| /api/auth/ | POST | Authentiserar user med email & password. Returnerar en JWT-token som används vid varje anrop API:et i en Authorization-header. | {"email": "...", "password" : "..."} | ❌ |
| /api/register/ | POST | Registrerar en användare. | Se User-modellen |  ❌ |
| /api/items/ | GET | Hämtar en lista på samtliga produkter. | ❌ |  category, page, pageSize |
| /api/items/:id | GET | Hämtar en enstaka produkt. | ❌ | ❌ |
| /api/items/ | POST | Skapar en ny produkt. Enbart tillgänglig för admins | Se Product-modellen | ❌ |
| /api/items/:id | PATCH | Uppdaterar produkt. Enbart tillgänglig för admins | Se Product-modellen | ❌ |
| /api/items/:id | DELETE | Tar bort en produkt med :id. Enbart tillgänglig för admins | ❌ | ❌ |
| /api/orders | GET | Hämtar en lista på den användarens ordrar eller samtliga ordrar för admins. | ❌ | status |
| /api/orders/:id | GET | Hämtar en enstaka order | ❌ | ❌ |
| /api/orders | POST | Skapar en ny order | Se Order-modellen | ❌ |
| /api/orders/:id | PATCH | Uppdaterar en orders status. Enbart tillgänglig för admins | {status: ...} | ❌ |
| /api/me | GET | Hämtar den inloggade användren | ❌ | ❌ |
| /api/me | PATCH | Uppdaterar profilen för den inloggade användren | Se User-modellen | ❌ |
| /api/images | GET | Hämtar en lista på alla tillgängliga bilder | ❌ | ❌ |
| /api/images | POST | Laddar upp en bild | En bild-fil | ❌ |

### Datamodeller

#### Product

##### Request Body and Model
```javascript
 {
  "title": 'Gretas Fury',
  "price": 999,
  "specialEdition": true,
  "shortDesc": 'Unisex',
  "category": "socks",
  "longDesc": 'Skate ipsum dolor sit amet...',
  "imgFile": 'skateboard-greta.png'
} 
```

#### Order
##### POST Request Body
```js
{
  "items": ["productId1", "productId1", "productId2"]
}
```
##### PATCH Request Body
```js
{
  "status": "shipped" // One of "inProcess", "canceled", "shipped"
}
```

##### Data Model
```javascript
 {
  id: 123,
  status: 'inProcess',
  shippingCity: "...",
  shippingStreet: "...",
  shippingZip: "...",
  createdAt: "2022-02-16 13:13:28.138 +00:00",
  updatedAt: "2022-02-16 13:13:28.138 +00:00",
  UserId: 1337,
  items: [ 
    { ProductId: 5, price: 899 }, 
    ... 
  ]
} 
```

#### User

##### Request Body
```js
{
  "email": 'greta.thunberg@example.se',
  "name": 'Johan Kivi',
  "password": 'grillkorv123',

  "address": {
    "street": 'Tokitokvägen 3',
    "zip": '123 45',
    "city": 'Tokberga'
  }
} 
```
## Inlämning och Bedömningskritierer

Er inlämning består av ert repo, er trello board och en utvärdering.

### Godkänt

* Tydlig Story breakdown i Trello
* Demonstrera komponenter, props, emits, data, computed, events
* Vue Router för navigation
* State management i Vuex
* Inlämnad utvärdering om agila metoder efter projektet

### Väl godkänt
* {...Godkänt}
* API-abstraktion till egen modul
* Admin-view för att skapa, redigera och ta bort produkter
* Admin-View för översikt av ordrar och uppdatera status

### Utvärderingen
Ni kommer indviduellt få lämna in en utvärdering på c.a ½-1 A4 på hur ni arbetade med git och agila metoder under projektet. Begrepp som ska finnas med i utvärderingen är User Story, Story Points, Planning Poker, Sprint, Backlog, Stand Up Meeting, Review, Retrospective, Definition of Done, MVP, Branche, Pull Request och Code Review.
