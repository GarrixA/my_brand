const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log(id)

const getblogs = JSON.parse(localStorage.getItem('myBlogs'))
const getSingleBlog = getblogs.filter(item => item.id == id)

console.log('singleBlog',getSingleBlog)

const singleBlogContainer = document.getElementById('blogsWraper')
if(getSingleBlog.length > 0){
    singleBlogContainer.innerHTML = getSingleBlog.map((item, idx)=>{
        return `
        <h1>${item.blogTitle}</h1>
        <div class="blogside">
            <div class="img">
                <img src=${item.blogImage} alt="blog">
            </div>
            <div class="blogText">
                <p>${item.blogDescription}</p>
                <div class="commentWraper">
                    <div class="reaction">
                        <div class="comment">
                            <img src="/images/commentIcon.svg" alt="comment">
                            <span>5 comments</span>
                        </div>
                        <div class="likes">
                            <img src="/images/likeIcon.svg" alt="likes">
                            <span>40 likes</span>
                        </div>
                    </div>
                    <div class="oneComment">
                        <div class="wraper">
                            <div class="oneImage">
                                <img src="/images/profileComment.svg" alt="">
                            </div>
                            <div class="contents">
                                <h1>Rugamba</h1>
                                <p>Well that's fantsastic I had no idea how it works but now I fund it. Much appreciations</p>
                                <div class="actions">
                                    <span>like</span>
                                    <span>Reply</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="myComments">
                        <div class="commentImage">
                            <img src="/images/profileComment.svg" alt="commentImage">
                        </div>
                        <div class="commentSection">
                            <form>
                                <input type="text">
                                <button>Add comment</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        
        `
    })
}