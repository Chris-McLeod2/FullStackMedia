let loc = document.location.pathname.split('/')
let id = loc[loc.length-1];

fetch(`/api/profile/${id}`).then(res=>res.json()).then(data=>{

document.querySelector('.profile-card').innerHTML +=
    `<div>
        <h1>Username:</h1>
        <h2>${data.name}</h2>
        <h1>Title:</h1>
        <h2>${data.title}</h2>
        <h1>Bio:</h1>
        <h2>${data.bio}</h2>
        <h1>Main Languages:</h1>
        <h2>${data.main_languages}</h2>
        <h1>Languages to learn:</h1>
        <h2>${data.to_learn}</h2>
    </div>`
});