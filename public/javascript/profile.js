function bioFormHandler(event) {
    event.preventDefault();

    const bio = document.querySelector('#bio-info').value.trim();
    const name = document.querySelector('#name-info').value.trim();
    const title = document.querySelector('#title-info').value.trim();
    const main_languages = document.querySelector('#main-info').value.trim();
    const to_learn = document.querySelector('#to-learn-info').value.trim();
    //const background = document.querySelector('#background-choice').value.trim();

    if (bio && name && title && main_languages && to_learn) {
        fetch('/api/profile', {
            method: 'POST',
            body: JSON.stringify({
                bio,
                name,
                title,
                main_languages,
                to_learn,
                //background
            }),
            headers: { 'Content-Type': 'application/json' }
        
        }).then(response => response.json()).then(res =>  document.location.replace(`/show-profile/${res.id}`));
    }
}

document.querySelector('#bio-form').addEventListener('submit', bioFormHandler);

