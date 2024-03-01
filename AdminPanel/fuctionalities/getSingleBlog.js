const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log(id)

const getblogs = JSON.parse(localStorage.getItem('myBlogs'))
const getSingleBlog = getblogs.filter(item => item.id == id)

console.log('singleBlog',getSingleBlog)

const singleBlogContainer = document.getElementById('blogsWraper')
if(getSingleBlog.length > 0){
    const blog = getSingleBlog[0]
    const myComments = blog.comments.map((item, index)=>
        `
        <div class="contents">
            <h1>Rugamba</h1>
            <p>${item}</p>
            <div class="actions">
                <span>like</span>
                <span>Reply</span>
            </div>
        </div>
        `
    ).join('')

    singleBlogContainer.innerHTML = 
        
       `
        <h1>${blog.blogTitle}</h1>
        <div class="blogside">
            <div class="img">
                <img src=${blog.blogImage} alt="blog">
            </div>
            <div class="blogText">
                <p>${blog.blogDescription}</p>
                <div class="commentWraper">
                    <div class="reaction">
                        <div class="comment">
                            <img src="/images/commentIcon.svg" alt="comment">
                            <span>${blog.comments.length} comments</span>
                        </div>
                        <div class="likes">
                            <img src="/images/likeIcon.svg" alt="likes">
                            <span>40 likes</span>
                        </div>
                    </div>
                    <div class="oneComment">
                        <div class="wraper">
                            ${myComments}
                        </div>
                    </div>
                    <div class="myComments">
                        <div class="commentImage">
                            <img src="/images/profileComment.svg" alt="commentImage">
                        </div>
                        <div class="commentSection">
                            <form id="add-comment-form">
                                <input type="text" id="comment-input">
                                <button type="submit">Add comment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        `;
        document.getElementById('add-comment-form').addEventListener('submit', (event)=>{
            event.preventDefault();
            const commentInput = document.getElementById('comment-input').value;
            blog.comments.push(commentInput);
            localStorage.setItem('myBlogs', JSON.stringify(getblogs));
            window.location.reload();
        })
}