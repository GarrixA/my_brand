document.addEventListener('DOMContentLoaded', function () {
    const blogs = document.querySelectorAll('.blog');
    let currentBlogIndex = 0;

    // Function to show the current blogs
    function showCurrentBlogs() {
        for (let i = 0; i < blogs.length; i++) {
            blogs[i].classList.remove('active');
        }
        for (let i = currentBlogIndex; i < currentBlogIndex + 2; i++) {
            blogs[i].classList.add('active');
        }
    }

    // Initial display of the first two blogs
    showCurrentBlogs();

    // Function to handle next button click
    document.getElementById('nextBtn').addEventListener('click', function () {
        if (currentBlogIndex < blogs.length - 2) {
            currentBlogIndex++;
            showCurrentBlogs();
        }
    });

    // Function to handle prev button click
    document.getElementById('prevBtn').addEventListener('click', function () {
        if (currentBlogIndex > 0) {
            currentBlogIndex--;
            showCurrentBlogs();
        }
    });
});