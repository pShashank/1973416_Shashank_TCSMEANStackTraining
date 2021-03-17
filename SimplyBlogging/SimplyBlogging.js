function addBlog(){
    var title = document.getElementById("title").value;
    var desc = document.getElementById("article").value;
    var imageInfo = document.getElementById("addImg").files[0].name;
    var blog = creatediv(title,desc,imageInfo)
    document.getElementById("blogRow").appendChild(blog)
}

function creatediv(title, article, image){
    var blog = document.createElement('div');
    blog.className = "col-sm-2 col-md-2 pb-2 card-style";
    var blogcard = document.createElement('div');
    blogcard.className = "card-block card-body article";
    var blogtitle = document.createElement('div');
    blogtitle.className = "card-title title";
    var blogimg = document.createElement('img');
    blogimg.className = "image justify-content-center";
    blogimg.src = image;
    blogtitle.innerHTML = title;
    blog.appendChild(blogtitle);
    blogcard.innerHTML = article;
    blog.appendChild(blogcard);
    blog.appendChild(blogimg);
    return blog;
}

