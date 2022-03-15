
fetch(`/api/profile/`).then(res => res.json()).then(data => {
    jsonData = data;


    for (let i = 0; i < data.length; i++) {
        let user = data[i];

        document.querySelector('.profile-cards').innerHTML +=
            `<div class="profile-card">
            <h1>Username:</h1>
             <h2>${user.name}</h2>
            <h1>Title:</h1>
             <h2>${user.title}</h2>
            <h1>Bio:</h1>
             <h2>${user.bio}</h2>
            <h1>Main Languages:</h1>
             <h2>${user.main_languages}</h2>
            <h1>Languages to learn:</h1>
             <h2>${user.to_learn}</h2>
         </div>`
    }
});