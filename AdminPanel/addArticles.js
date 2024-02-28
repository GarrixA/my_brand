const formData = document.getElementById('blogs-form');
function generateUniqueId() {
    return '_' + Math.random().toString(36).substring(2, 11);
}


formData.addEventListener('submit', function (event) {
    event.preventDefault();
    const image = document.getElementById('image').files[0];
    const title = document.getElementById('title').value;
    const date = document.getElementById('date').value;
    const description = tinymce.get('description').getContent({ format: 'text' });

    const myBlogArray = JSON.parse(localStorage.getItem('myBlogs')) || [];
    const reader = new FileReader();
    reader.onload = () => {
        const articleImage = reader.result;
        const articleContents = {
            id : generateUniqueId(),
            blogImage: articleImage,
            blogTitle: title,
            blogDate: date,
            blogDescription: description
        }
        myBlogArray.unshift(articleContents);
        localStorage.setItem('myBlogs', JSON.stringify(myBlogArray));
        window.location.href = '/AdminPanel/AdminBlog.html'
    }
    reader.readAsDataURL(image);
});