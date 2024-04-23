var posts=["posts/5ec9.html","posts/a72e.html","posts/dirty-ip-instagram.html","posts/clash-direct-udp.html","posts/b0f3.html","posts/7a6a.html","posts/73aa.html","posts/201b.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };