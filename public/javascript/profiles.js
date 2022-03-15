
fetch(`/api/profile/`).then(res=>res.json()).then(data=>{
 jsonData = data;


 for (let i = 0; i < data.length; i++) {
     let user = data[i];

     document.querySelector('.profile-cards').innerHTML +=
         `<div class="profile-card">
             <h1>${user.name}</h1>
             <h2>${user.title}</h2>
             <h2>${user.bio}</h2>
             <h2>${user.main_languages}</h2>
             <h2>${user.to_learn}</h2>
         </div>`
 }
});