
const blogsContainer = document.querySelector('#blogsContainer');
const nextBtn = document.querySelector('.nexts');
const prevBtn = document.querySelector('.preve');

nextBtn.addEventListener('click', () => {
  const firstBlog = blogsContainer.firstElementChild;
  blogsContainer.appendChild(firstBlog);
});

prevBtn.addEventListener('click', () => {
  const lastBlog = blogsContainer.lastElementChild;
  blogsContainer.prepend(lastBlog);
});



