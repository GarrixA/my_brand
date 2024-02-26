function createBlog(event) {
    event.preventDefault();

    let blog = {
        title: document.getElementById('title').value,
        date: document.getElementById('date').value,
        description: document.getElementById('description').value
    };

    localStorage.setItem('blog', JSON.stringify(blog));
}

let myBlog = localStorage.getItem('blog');

let blog = JSON.parse(myBlog);

