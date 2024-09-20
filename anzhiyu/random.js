var posts=["posts/5ec9.html","posts/a72e.html","posts/7fe3.html","posts/2311.html","posts/2a32.html","posts/b0f3.html","posts/mi-openwrt.html","posts/7a6a.html","posts/8fbe.html","posts/73aa.html","posts/201b.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };