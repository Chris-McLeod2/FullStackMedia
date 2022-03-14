function postFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    
    if (title && content) {
      fetch('/api/posts', {
        method: 'post',
        body: JSON.stringify({
          title,
          content
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then(() => window.location.pathname = '/posts')
      .catch(err => {
        console.log('error');
      });
    }
   }

 
  document.querySelector('.new-post-form').addEventListener('submit', postFormHandler);