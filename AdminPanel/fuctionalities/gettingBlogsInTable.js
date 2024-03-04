// Getting blogs in table

const getAllArticlesTable = JSON.parse(localStorage.getItem('myBlogs')) || [];
const blogsContainerTable = document.getElementById('tbody');

if (getAllArticles.length > 0) {
  blogsContainerTable.innerHTML = `${getAllArticlesTable.map((item, index) => {
    return `
        <tr>
            <td>${item.blogTitle}</td>
            <td>${item.blogDate}</td>
            <td>${item.comments.length}</td>
            <td>0</td>
            <td>
                <a href="/AdminPanel/editBlog.html"><button>
                    <img src="/Images/ic_baseline-edit.png" alt="">
                </button></a>
                <button>
                    <img src="/Images/mingcute_delete-fill.png" alt="">
                </button>
            </td>
        </tr>
      `
  }).join('')
    }`;
}