function commentFormHandler(event) {
    event.preventDefault();
  console.log('hit')

    const comment_text = document.querySelector('#comment_text').value.trim();
    const post_id = document.querySelector('#post_id').value.trim();
    
    console.log(comment_text , post_id)

    if (comment_text && post_id) {
      fetch('/api/comments', {
        method: 'post',
        body: JSON.stringify({
          comment_text,
          post_id,
          user_id
        }),
        headers: { 'Content-Type': 'application/json' }
      }).then(() => window.location.pathname = '/comments')
      .catch(err => {
        console.log('error');
      });
    }
   }

 
  document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);
//   document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);