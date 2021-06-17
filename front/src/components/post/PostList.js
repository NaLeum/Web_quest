import PostItem from "./PostItem";




const PostList = ({postList}) => {
    console.log(postList)
    return(
            <ul>
                {postList.map((post)=>(
                    <PostItem key={post.postIdx} post={post}/>
                ))}
            </ul>
    )
}

export default PostList;