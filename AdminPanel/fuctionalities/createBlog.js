
let blogs = JSON.parse(localStorage.getItem('obj')) || [
    { img: '', title: 'Manaki Malek', description: 'What are you trying to say', date: '' }
];
console.log(blogs)

function readAll() {

    localStorage.setItem('obj', JSON.stringify(blogs));

    let blogsContainer = document.querySelector('.blogsContainer');

    if (blogsContainer) {
        let obj = localStorage.getItem('obj');

        let objData = JSON.parse(obj);
        let elements = '';

        objData.map(item => {

            elements += `<div class="blog">
            <div class="blogImage">
                <img src="${item.img}">
            </div>
            <h2>${item.title}</h2>
            <p>${item.description}</p>
            <a href="/singleBlog.html"> <button>view more</button></a>
        </div>`;
        });

        blogsContainer.innerHTML = elements;
    }
}
let blogImage = document.querySelector("#image").value
function addBlog(event) {
    event.preventDefault();

    let blogImage = document.querySelector("#image").value
    let blogTitle = document.querySelector("#title").value
    let blogDate = document.querySelector("#date").value
    let blogDescription = document.querySelector("#description").value

    
    let formData = { img: blogImage, title: blogTitle, description: blogDescription.value, date: blogDate }

    blogs.push(formData);

    localStorage.setItem('obj', JSON.stringify(blogs));

    readAll();
}

readAll();
