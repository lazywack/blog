var posts=["posts/56437b95.html","posts/c13184bb.html","posts/14692180.html","posts/d78bbe1a.html","posts/bc2db28d.html","posts/a6d155fc.html","posts/d7cc9867.html","posts/40011d74.html","posts/41d7331c.html","posts/37c14f38.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };