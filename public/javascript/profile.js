function bioFormHandler(event) {
    event.preventDefault();

    const bio = document.querySelector('#bio-info').value.trim();
    const name = document.querySelector('#name-info').value.trim();
    const title = document.querySelector('#title-info').value.trim();
    const main = document.querySelector('#main-info').value.trim();
    const tolearn = document.querySelector('#to-learn-info').value.trim();

    if (bio && name && title && main && tolearn) {
        fetch('/api/profile', {
            method: 'post',
            body: JSON.stringify({
                bio,
                name,
                title,
                main_languages,
                to_learn
            }),
            headers: { 'Content-Type': 'application/json' }
        }).then((response) => {console.log(response)})
    }
}

document.querySelector('.bio-form').addEventListener('submit', bioFormHandler);

