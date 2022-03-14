function commentFormHandler(event) {
    event.preventDefault();

    if (event.target.className.includes('comment-form')) {

        
        console.log(event.target)
    }
  

    // const comment_text = document.querySelector('.comment_text').value.trim();
    // const post_id = document.querySelector('.post_id').value.trim();
    
    // console.log(comment_text , post_id)

    // if (title && content) {
    //   fetch('/api/posts', {
    //     method: 'post',
    //     body: JSON.stringify({
    //       title,
    //       content
    //     }),
    //     headers: { 'Content-Type': 'application/json' }
    //   }).then(() => window.location.pathname = '/posts')
    //   .catch(err => {
    //     console.log('error');
    //   });
    // }
   }

 
  document.addEventListener('submit', commentFormHandler);
//   document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);