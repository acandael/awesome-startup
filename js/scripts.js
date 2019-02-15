// Get Employees from Public API
fetch('https://randomuser.me/api/?results=12')
  .then(res => {
    // parse JSON
    const json = res.json();
    return json;
  })
  .then(data => {
    // Get the data
    const users = data.results;
    let card = '';

    // Generate Gallery
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
                        <p class="card-text">${user.email}</p>
                        <p class="card-text cap">${user.location.city}, ${user.location.state}</p>
                    </div>
                </div>
      `;
      document.getElementById('gallery').innerHTML = card;
      console.log(user);
    });

    // Show Modal
    const cards = document.getElementsByClassName('card');

    // Listen for click event on each card
    for (let i = 0; i < cards.length; i += 1) {
      cards[i].addEventListener('click', function (e) {
        let modal = '';
        const user = users[i];

        // Create template literal
        modal = `
          <div class="modal-container">
            <div class="modal">
              <button type="button" id="modal-close-btn" class="modal-close-btn"><strong>X</strong></button>
              <div class="modal-info-container">
                  <img class="modal-img" src="${user.picture.large}" alt="profile picture">
                  <h3 id="name" class="modal-name cap">${user.name.first} ${user.name.last}</h3>
                  <p class="modal-text"><a href="mailto:${user.email}">${user.email}</a></p>
                  <p class="modal-text cap">${user.location.city}</p>
                  <hr>
                  <p class="modal-text">${user.cell}</p>
                  <p class="modal-text">${user.location.street}, ${user.location.city}, ${user.location.state}</p>
                  <p class="modal-text">Birthday: ${user.dob.date.slice(0, 10)}</p>
              </div>
            </div>
          </div>
          `;

        // Create overlay
        const overlay = document.createElement('div');
        overlay.setAttribute('id', 'overlay');
        overlay.innerHTML = modal;
        document.getElementById('gallery').appendChild(overlay);

        // Close Modal
        const closeButton = document.getElementById('modal-close-btn');

        closeButton.addEventListener('click', function (e) {
          this.parentNode.style.display = 'none';
          // remove modal
          document.getElementById('gallery').removeChild(overlay);
        })
      })
    }
  });
