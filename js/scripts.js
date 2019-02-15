fetch('https://randomuser.me/api/?results=12')
  .then(res => {
    const myJson = res.json();
    return myJson;
  })
  .then(data => {
    const users = data.results;
    let card = '';
    users.forEach(user => {
      card += `
      <div class="card">
                    <div class="card-img-container">
                        <img class="card-img" src="${user.picture.large}" alt="profile picture">
                    </div>
                    <div class="card-info-container">
                        <h3 id="name" class="card-name cap">${
        user.name.first
        } ${user.name.last}</h3>
                        <p class="card-text"><a href="mailto:${user.email}">${user.email}</a></p>
                        <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
                    </div>
                </div>
      `;
      console.log(user);
      document.getElementById('gallery').innerHTML = card;
    });
  });
