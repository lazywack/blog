var posts=["posts/c13184bb.html","posts/14692180.html","posts/56437b95.html","posts/d7cc9867.html","posts/37c14f38.html","posts/a6d155fc.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };