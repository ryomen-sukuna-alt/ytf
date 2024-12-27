fetch('https://fakestoreapi.com/products?limit=10')
.then(res => res.json())
.then(users => {
    let container = document.getElementById('card')



    users.forEach(user => {
        let card = document.createElement('div');
        card.className = 'card';

        card.innerHTML = `
                    <div class="avatar"></div>
                    <img src=${user.image}>
                    <h2> <i>♠️</i> ${user.title}</h2>
                    <p>  <i>💸</i> ${user.price}</p>
                    <p>  <i>📲</i> ${user.number}</p>
                    <p>  <i>⭐</i> ${user.rate}</p>
                `;

        container.appendChild(card);
    });
})