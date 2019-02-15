fetch('https://randomuser.me/api/?results=12')
  .then(res => {
    const myJson = res.json();
    return myJson;
  })
  .then(data => {
    const users = data.results;
    let card = '';
    users.forEach(user => {
      card = `
      <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="https://placehold.it/90x90" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${
                          user.name.first
                        } ${user.name.last}</h3>
                        <p class="card-text">email</p>
                        <p class="card-text cap">city, state</p>
                    </div>
                </div>
      `;
      console.log(user);
      document.getElementById('gallery').innerHTML = card;
    });
  });
